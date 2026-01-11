import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface RentalPrices {
  violinsViolas: number;
  cellos: number;
  bass: number;
}

export const useRentalPrices = () => {
  return useQuery({
    queryKey: ['rental-prices'],
    queryFn: async (): Promise<RentalPrices> => {
      const { data, error } = await supabase.functions.invoke('get-rental-prices');
      
      if (error) {
        throw error;
      }
      
      return data;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchOnWindowFocus: true,
  });
};
