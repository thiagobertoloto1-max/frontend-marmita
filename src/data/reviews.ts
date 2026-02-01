// Demo reviews data - mockup only

import leticiaOliveira from '@/assets/reviews/leticia_oliveira.jpg';
import claudeteNoronha from '@/assets/reviews/claudete_noronha.jpg';
import rafaelMendes from '@/assets/reviews/rafael_mendes.jpg';
import antonioPacheco from '@/assets/reviews/antonio_pacheco.jpg';
import marinaDuarte from '@/assets/reviews/marina_duarte.jpg';
import patriciaFarias from '@/assets/reviews/patricia_farias.jpg';
import anaBeatrizLopes from '@/assets/reviews/ana_beatriz_lopes.jpg';
import julianaReis from '@/assets/reviews/juliana_reis.jpg';
import camilaAzevedo from '@/assets/reviews/camila_azevedo.jpg';
// Batch 2
import lucasTeixeira from '@/assets/reviews/lucas_teixeira.jpg';
import diegoNogueira from '@/assets/reviews/diego_nogueira.jpg';
import renataAlbuquerque from '@/assets/reviews/renata_albuquerque.jpg';
import marcosVinicius from '@/assets/reviews/marcos_vinicius.jpg';
import fernandaRocha from '@/assets/reviews/fernanda_rocha.jpg';
import carlosEduardo from '@/assets/reviews/carlos_eduardo.jpg';
import simoneVasconcelos from '@/assets/reviews/simone_vasconcelos.jpg';
import isabelaPires from '@/assets/reviews/isabela_pires.jpg';
import joaoBatista from '@/assets/reviews/joao_batista.jpg';
// Batch 3
import andreLima from '@/assets/reviews/andre_lima.jpg';
import matheusRangel from '@/assets/reviews/matheus_rangel.jpg';
import vanessaCoutinho from '@/assets/reviews/vanessa_coutinho.jpg';
import brunaSantos from '@/assets/reviews/bruna_santos.jpg';
import larissaMenezes from '@/assets/reviews/larissa_menezes.jpg';
import renatoFalcao from '@/assets/reviews/renato_falcao.jpg';
import paulaNogueira from '@/assets/reviews/paula_nogueira.jpg';

export interface Review {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

// Abrevia sobrenome: "Letícia Oliveira" -> "Letícia O."
export function formatName(name: string) {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[1][0]}.`;
}

// "Hoje", "Ontem", "3 dias"
export function formatRelativeDate(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 'Hoje';
  if (diffDays === 1) return 'Ontem';
  return `${diffDays} dias`;
}

// Embaralha avaliações (aleatório por visitante)
export function shuffleReviews<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

// Placeholder for reviews without photos
const defaultAvatar = 'https://ui-avatars.com/api/?background=random&color=fff&bold=true&name=';

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Letícia Oliveira',
    avatar: leticiaOliveira,
    text: 'Marmita deliciosa, pedi achando que ia ser normal e me surpreendi 😍 vou pedir mais vezes simmm',
    rating: 5,
  },
  {
    id: 2,
    name: 'Claudete Noronha',
    avatar: claudeteNoronha,
    text: 'comida muito boa gostei bastante chegou certinho',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rafael Mendes',
    avatar: rafaelMendes,
    text: 'Tudo muito bem feito, comida saborosa e porção boa. Recomendo.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Antônio Pacheco',
    avatar: antonioPacheco,
    text: 'chegou rapido comida boa tempero no ponto',
    rating: 5,
  },
  {
    id: 5,
    name: 'Marina Duarte',
    avatar: marinaDuarte,
    text: 'Achei incrível!! Bem temperada, leve e matou minha fome ❤️',
    rating: 5,
  },
  {
    id: 6,
    name: 'Patrícia Farias',
    avatar: patriciaFarias,
    text: 'Gostei bastante, comida caseira de verdade e bem servida',
    rating: 5,
  },
  {
    id: 7,
    name: 'Ana Beatriz Lopes',
    avatar: anaBeatrizLopes,
    text: 'Muito bom! Dá pra sentir que é feito com cuidado 🥰',
    rating: 5,
  },
  {
    id: 8,
    name: 'Juliana Reis',
    avatar: julianaReis,
    text: 'Amei demais 😍 chegou quentinha e super saborosa',
    rating: 5,
  },
  {
    id: 9,
    name: 'Camila Azevedo',
    avatar: camilaAzevedo,
    text: 'Perfeitaaaa 💕 apresentação linda e comida maravilhosa',
    rating: 5,
  },
  // Batch 2
  {
    id: 10,
    name: 'Lucas Teixeira',
    avatar: lucasTeixeira,
    text: 'Curti bastante, bem temperado e chegou no horário',
    rating: 5,
  },
  {
    id: 11,
    name: 'Diego Nogueira',
    avatar: diegoNogueira,
    text: 'Comida top, vale muito a pena',
    rating: 5,
  },
  {
    id: 12,
    name: 'Renata Albuquerque',
    avatar: renataAlbuquerque,
    text: 'gostei bastante da comida bem feita e saborosa',
    rating: 5,
  },
  {
    id: 13,
    name: 'Marcos Vinícius',
    avatar: marcosVinicius,
    text: 'Muito bom, pedi de novo depois da primeira vez',
    rating: 5,
  },
  {
    id: 14,
    name: 'Fernanda Rocha',
    avatar: fernandaRocha,
    text: 'Comida maravilhosa, bem temperada e chegou quentinha 🥰',
    rating: 5,
  },
  {
    id: 15,
    name: 'Carlos Eduardo',
    avatar: carlosEduardo,
    text: 'boa comida bem feita vale a pena',
    rating: 5,
  },
  {
    id: 16,
    name: 'Simone Vasconcelos',
    avatar: simoneVasconcelos,
    text: 'Gostei bastante, tempero bom e entrega correta',
    rating: 5,
  },
  {
    id: 17,
    name: 'Isabela Pires',
    avatar: isabelaPires,
    text: 'Amei demais 😍 muito saborosa e leve',
    rating: 5,
  },
  {
    id: 18,
    name: 'João Batista',
    avatar: joaoBatista,
    text: 'Comida boa chegou no horario',
    rating: 5,
  },
  // Batch 3
  {
    id: 19,
    name: 'André Lima',
    avatar: andreLima,
    text: 'Tudo certo, comida bem feita e saborosa',
    rating: 5,
  },
  {
    id: 20,
    name: 'Matheus Rangel',
    avatar: matheusRangel,
    text: 'Muito boa mesmo, pedi de novo 👍',
    rating: 5,
  },
  {
    id: 21,
    name: 'Vanessa Coutinho',
    avatar: vanessaCoutinho,
    text: 'Gostei bastante, bem temperada e porção boa',
    rating: 5,
  },
  {
    id: 22,
    name: 'Bruna Santos',
    avatar: brunaSantos,
    text: 'Perfeitaaa 💕 apresentação linda',
    rating: 5,
  },
  {
    id: 23,
    name: 'Larissa Menezes',
    avatar: larissaMenezes,
    text: 'Muito bom!! chegou rápido e tava delicioso 😋',
    rating: 5,
  },
  {
    id: 24,
    name: 'Renato Falcão',
    avatar: renatoFalcao,
    text: 'Bom demais, recomendo',
    rating: 5,
  },
  {
    id: 25,
    name: 'Paula Nogueira',
    avatar: paulaNogueira,
    text: 'gostei da comida bem feita e saborosa',
    rating: 5,
  },
  {
    id: 26,
    name: 'Sônia Barbosa',
    avatar: `${defaultAvatar}Sônia+B`,
    text: 'porcao boa e comida saborosa',
    rating: 5,
  },
  {
    id: 27,
    name: 'Eduardo Silveira',
    avatar: `${defaultAvatar}Eduardo+S`,
    text: 'Perfeita demais 😋 já virei cliente!',
    rating: 5,
  },
  // Batch 4 - all without photos
  {
    id: 28,
    name: 'Marta Siqueira',
    avatar: `${defaultAvatar}Marta+S`,
    text: 'muito bom chegou no horario',
    rating: 5,
  },
  {
    id: 29,
    name: 'Giovana Freitas',
    avatar: `${defaultAvatar}Giovana+F`,
    text: 'Muito bom!!! entrega rápida e comida top 🔥',
    rating: 5,
  },
  {
    id: 30,
    name: 'Paulo Henrique',
    avatar: `${defaultAvatar}Paulo+H`,
    text: 'gostei bastante tempero bom',
    rating: 5,
  },
  {
    id: 31,
    name: 'Rosana Pinto',
    avatar: `${defaultAvatar}Rosana+P`,
    text: 'Perfeita demais 😋 já virei cliente!',
    rating: 5,
  },
  {
    id: 32,
    name: 'Bruno Cardoso',
    avatar: `${defaultAvatar}Bruno+C`,
    text: 'comida boa e bem feita recomendo',
    rating: 5,
  },
  {
    id: 33,
    name: 'Cecília Moura',
    avatar: `${defaultAvatar}Cecília+M`,
    text: 'Muito bom!!! entrega rápida e comida top 🔥',
    rating: 5,
  },
  {
    id: 34,
    name: 'Jéssica Ramos',
    avatar: `${defaultAvatar}Jéssica+R`,
    text: 'comida boa e bem feita recomendo',
    rating: 5,
  },
  {
    id: 35,
    name: 'Reginaldo Costa',
    avatar: `${defaultAvatar}Reginaldo+C`,
    text: 'Perfeita demais 😋 já virei cliente!',
    rating: 5,
  },
  {
    id: 36,
    name: 'Eliane Prado',
    avatar: `${defaultAvatar}Eliane+P`,
    text: 'comida boa e bem feita recomendo',
    rating: 5,
  },
  {
  id: 37,
  name: 'Renata Costa',
  avatar: `${defaultAvatar}Renata+C`,
  text: 'gostei bastante da marmita veio bem caprichada e quentinha 😋',
  rating: 5,
},
{
  id: 38,
  name: 'Paulo Henrique',
  avatar: `${defaultAvatar}Paulo+H`,
  text: 'primeira vez q peço aqui e curti viu, comida simples mas boa',
  rating: 5,
},
{
  id: 39,
  name: 'Marcia Almeida',
  avatar: `${defaultAvatar}Marcia+A`,
  text: 'chegou rapidooo, bem embalado e gostoso',
  rating: 5,
},
{
  id: 40,
  name: 'Carlos Nogueira',
  avatar: `${defaultAvatar}Carlos+N`,
  text: 'bom custo beneficio, mata a fome tranquilo',
  rating: 4,
},
{
  id: 41,
  name: 'Juliana Ribeiro',
  avatar: `${defaultAvatar}Juliana+R`,
  text: 'ameiii a comida 😍 tempero bom demais',
  rating: 5,
},
{
  id: 42,
  name: 'Felipe Santos',
  avatar: `${defaultAvatar}Felipe+S`,
  text: 'veio certinho do jeito q pedi, recomendo',
  rating: 5,
},
{
  id: 43,
  name: 'Aline Martins',
  avatar: `${defaultAvatar}Aline+M`,
  text: 'bem servida e saborosa, vale a pena sim',
  rating: 5,
},
{
  id: 44,
  name: 'Roberto Lima',
  avatar: `${defaultAvatar}Roberto+L`,
  text: 'comida ok, nada gourmet mas é boa',
  rating: 4,
},
{
  id: 45,
  name: 'Daniela Freitas',
  avatar: `${defaultAvatar}Daniela+F`,
  text: 'ja pedi outras vezes e nunca decepciona',
  rating: 5,
},
{
  id: 46,
  name: 'Eduardo Pacheco',
  avatar: `${defaultAvatar}Eduardo+P`,
  text: 'bem temperada, chegou quentinha ainda',
  rating: 5,
},
{
  id: 47,
  name: 'Luciana Teixeira',
  avatar: `${defaultAvatar}Luciana+T`,
  text: 'marmita simples mas gostosa, salvou meu almoço',
  rating: 5,
},
{
  id: 48,
  name: 'Bruno Rocha',
  avatar: `${defaultAvatar}Bruno+R`,
  text: 'preço justo e comida boa',
  rating: 4,
},
{
  id: 49,
  name: 'Patricia Mendes',
  avatar: `${defaultAvatar}Patricia+M`,
  text: 'bem feita, da pra sentir q é comida caseira msm',
  rating: 5,
},
{
  id: 50,
  name: 'Joao Victor',
  avatar: `${defaultAvatar}Joao+V`,
  text: 'curti bastante, vou pedir dnv',
  rating: 5,
},
{
  id: 51,
  name: 'Camila Araujo',
  avatar: `${defaultAvatar}Camila+A`,
  text: 'veio certinho, bem embalado e gostoso',
  rating: 5,
},
{
  id: 52,
  name: 'Rafael Torres',
  avatar: `${defaultAvatar}Rafael+T`,
  text: 'boa quantidade, da pra ficar satisfeito',
  rating: 4,
},
{
  id: 53,
  name: 'Simone Barros',
  avatar: `${defaultAvatar}Simone+B`,
  text: 'adorei o temperooo 😍',
  rating: 5,
},
{
  id: 54,
  name: 'Thiago Cunha',
  avatar: `${defaultAvatar}Thiago+C`,
  text: 'chegou dentro do prazo e bem feito',
  rating: 5,
},
{
  id: 55,
  name: 'Vanessa Lopes',
  avatar: `${defaultAvatar}Vanessa+L`,
  text: 'gostei sim, recomendo pra quem quer algo rapido',
  rating: 5,
},
{
  id: 56,
  name: 'Anderson Melo',
  avatar: `${defaultAvatar}Anderson+M`,
  text: 'boa comida pra dia a dia',
  rating: 4,
},
{
  id: 57,
  name: 'Osvaldo C.',
  avatar: `${defaultAvatar}Osvaldo+C`,
  text: 'goztoso gostei obrigad',
  rating: 5,
},
{
  id: 58,
  name: 'Aparecida M.',
  avatar: `${defaultAvatar}Aparecida+M`,
  text: 'comida boa bem feita',
  rating: 5,
},
{
  id: 59,
  name: 'Sebastião R.',
  avatar: `${defaultAvatar}Sebastiao+R`,
  text: 'gostei sim veio certo',
  rating: 4,
},
{
  id: 60,
  name: 'Ivone B.',
  avatar: `${defaultAvatar}Ivone+B`,
  text: 'muinto boa a comida',
  rating: 5,
},
{
  id: 61,
  name: 'Valdir P.',
  avatar: `${defaultAvatar}Valdir+P`,
  text: 'chegou quentinha gostei',
  rating: 5,
},
{
  id: 62,
  name: 'Neusa F.',
  avatar: `${defaultAvatar}Neusa+F`,
  text: 'bem temperada',
  rating: 4,
},
{
  id: 63,
  name: 'Orlando T.',
  avatar: `${defaultAvatar}Orlando+T`,
  text: 'boa sim recomendo',
  rating: 5,
},
{
  id: 64,
  name: 'Doralice G.',
  avatar: `${defaultAvatar}Doralice+G`,
  text: 'comida simples mais boa',
  rating: 4,
},
{
  id: 65,
  name: 'Anselmo L.',
  avatar: `${defaultAvatar}Anselmo+L`,
  text: 'gostei bastante',
  rating: 5,
},
{
  id: 66,
  name: 'Terezinha C.',
  avatar: `${defaultAvatar}Terezinha+C`,
  text: 'marmita boa',
  rating: 4,
},
{
  id: 67,
  name: 'Baltazar R.',
  avatar: `${defaultAvatar}Baltazar+R`,
  text: 'bem feita a comida',
  rating: 5,
},
{
  id: 68,
  name: 'Lourdes S.',
  avatar: `${defaultAvatar}Lourdes+S`,
  text: 'gostei veio certinho',
  rating: 5,
},
{
  id: 69,
  name: 'Elias P.',
  avatar: `${defaultAvatar}Elias+P`,
  text: 'boa pra almoco',
  rating: 4,
},
{
  id: 70,
  name: 'Nair F.',
  avatar: `${defaultAvatar}Nair+F`,
  text: 'comida boa sim',
  rating: 5,
},
{
  id: 71,
  name: 'Raimundo B.',
  avatar: `${defaultAvatar}Raimundo+B`,
  text: 'gostei da marmita',
  rating: 4,
},
{
  id: 72,
  name: 'Gabriela D.',
  avatar: `${defaultAvatar}Gabriela+D`,
  text: 'tooppp gostei o motoboy gente boa dms tmj',
  rating: 5,
},
{
  id: 73,
  name: 'Lucas M.',
  avatar: `${defaultAvatar}Lucas+M`,
  text: 'goostei topppp',
  rating: 5,
},
{
  id: 74,
  name: 'Renata C.',
  avatar: `${defaultAvatar}Renata+C`,
  text: 'marmita boa dms slc',
  rating: 5,
},
{
  id: 75,
  name: 'Bruno H.',
  avatar: `${defaultAvatar}Bruno+H`,
  text: 'mt bom chegou rapido',
  rating: 5,
},
{
  id: 76,
  name: 'Paula S.',
  avatar: `${defaultAvatar}Paula+S`,
  text: 'ameiii seriooo',
  rating: 5,
},
{
  id: 77,
  name: 'Diego L.',
  avatar: `${defaultAvatar}Diego+L`,
  text: 'bom demais vale a pena',
  rating: 4,
},
{
  id: 78,
  name: 'Camila R.',
  avatar: `${defaultAvatar}Camila+R`,
  text: 'comida top recomendo',
  rating: 5,
},
{
  id: 79,
  name: 'Felipe N.',
  avatar: `${defaultAvatar}Felipe+N`,
  text: 'mt bom msm',
  rating: 5,
},
{
  id: 80,
  name: 'Juliana T.',
  avatar: `${defaultAvatar}Juliana+T`,
  text: 'curti bastante',
  rating: 4,
},
{
  id: 81,
  name: 'Marcos V.',
  avatar: `${defaultAvatar}Marcos+V`,
  text: 'top dms',
  rating: 5,
},
{
  id: 82,
  name: 'Aline P.',
  avatar: `${defaultAvatar}Aline+P`,
  text: 'chegou certinho gostei',
  rating: 5,
},
{
  id: 83,
  name: 'Rafael G.',
  avatar: `${defaultAvatar}Rafael+G`,
  text: 'marmita boa slk',
  rating: 4,
},
{
  id: 84,
  name: 'Bianca O.',
  avatar: `${defaultAvatar}Bianca+O`,
  text: 'amei mt boa',
  rating: 5,
},
{
  id: 85,
  name: 'Pedro F.',
  avatar: `${defaultAvatar}Pedro+F`,
  text: 'bom pra caramba',
  rating: 5,
},
{
  id: 86,
  name: 'Larissa M.',
  avatar: `${defaultAvatar}Larissa+M`,
  text: 'top recomendo',
  rating: 5,
},
];

export const getDisplayReviews = () => reviews.slice(0, 3);
export const getAllReviews = () => reviews;
export function formatNameShort(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";

  const first = parts[0];

  // se tiver só "Paulo" -> "Paulo"
  if (parts.length === 1) return first;

  // pega a última parte como "sobrenome" e usa só a inicial
  const last = parts[parts.length - 1];
  const initial = last[0]?.toUpperCase() ?? "";

  return initial ? `${first} ${initial}.` : first;
}