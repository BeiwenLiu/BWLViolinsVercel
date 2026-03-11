export interface Product {
  id: string;
  name: string;
  type: 'Violin' | 'Viola' | 'Cello';
  slug: string;
  front_image_url: string;
  back_image_url: string;
  description: string;
  is_coming_soon: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}
