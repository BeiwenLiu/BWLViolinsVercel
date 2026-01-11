import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SHEET_ID = '1VzR9z_Wa00yaVS3iyd78fgm9I66fhEyElBhJRr_A4Nk';
    const RANGE = 'A4:B6';
    
    // Fetch from Google Sheets public CSV export
    // The sheet must be published to web: File > Share > Publish to web
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&range=${RANGE}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch spreadsheet data');
    }
    
    const csvText = await response.text();
    
    // Parse CSV - format: "Instrument Type","Monthly Price $"
    const lines = csvText.trim().split('\n');
    const prices: Record<string, number> = {};
    
    for (const line of lines) {
      // Parse CSV line - handles quoted values
      const match = line.match(/"([^"]+)",?"?(\d+)"?/);
      if (match) {
        const instrument = match[1].trim();
        const price = parseInt(match[2], 10);
        
        if (instrument.toLowerCase().includes('violin') || instrument.toLowerCase().includes('viola')) {
          prices.violinsViolas = price;
        } else if (instrument.toLowerCase().includes('cello')) {
          prices.cellos = price;
        } else if (instrument.toLowerCase().includes('bass')) {
          prices.bass = price;
        }
      }
    }

    return new Response(JSON.stringify(prices), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching rental prices:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
