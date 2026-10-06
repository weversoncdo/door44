export type NavSection = 'INÍCIO' | 'SOBRE' | 'PRODUÇÕES' | 'PARCEIROS' | 'ORÇAMENTO' | 'CONTATO';

export type ActiveView = 'home' | 'producoes';

export interface PageMetadata {
  id: number;
  section: NavSection;
  title: string;
  subtitle?: string;
}

export const PAGES_META: PageMetadata[] = [
  { id: 1, section: 'INÍCIO', title: 'Door44 Studios', subtitle: 'Abertura' },
  { id: 2, section: 'SOBRE', title: 'Sobre Nós', subtitle: 'A Produtora' },
  { id: 3, section: 'PRODUÇÕES', title: 'Gleyfy Brauly', subtitle: 'Biografia do Artista' },
  { id: 4, section: 'PRODUÇÕES', title: 'Sobre a Produção', subtitle: 'Pink Floyd Cover' },
  { id: 5, section: 'PRODUÇÕES', title: 'Videoclipe', subtitle: 'Another Brick in The Wall' },
  { id: 6, section: 'PRODUÇÕES', title: 'Gabrielz', subtitle: 'Biografia do Artista' },
  { id: 7, section: 'PRODUÇÕES', title: 'Sobre a Produção', subtitle: 'Retomada' },
  { id: 8, section: 'PRODUÇÕES', title: 'Videoclipe', subtitle: 'Gabrielz - Retomada' },
  { id: 9, section: 'PARCEIROS', title: 'Parceiros A - Z', subtitle: 'Ecossistema' },
  { id: 10, section: 'PARCEIROS', title: 'Buzzkill Boyz', subtitle: 'Comunicação Musical' },
  { id: 11, section: 'PARCEIROS', title: 'Cena Class', subtitle: 'Casting & Equipe' },
  { id: 12, section: 'PARCEIROS', title: 'Cristini Makeup', subtitle: 'Caracterização & Visagismo' },
  { id: 13, section: 'CONTATO', title: 'Canais de Contato', subtitle: 'Fale Conosco' },
  { id: 14, section: 'CONTATO', title: 'Muito Obrigado', subtitle: 'Conexões & Parcerias' },
];

