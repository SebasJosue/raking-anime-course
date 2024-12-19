const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Añadir animes primero
  const animes = [
    { id: 1, title: 'One Punch Man' },
    { id: 2, title: 'Dragon Ball Z' },
    { id: 3, title: 'My Hero Academia' },
    { id: 4, title: 'Hellsing' },
    { id: 5, title: 'Jujutsu Kaisen' },
    { id: 6, title: 'The Seven Deadly Sins' },
    { id: 7, title: 'One Piece' },
  ];

  for (const anime of animes) {
    await prisma.anime.create({
      data: anime,
    });
  }

  // Añadir personajes con toda su información
  const characters = [
    {
      name: 'Saitama',
      anime: 'One Punch Man',
      powerLevel: 100,
      rank: 1,
      abilities: ['Super Strength', 'Speed', 'Invulnerability'],
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/739b77204668387.Y3JvcCwyNDgxLDE5NDAsMCwzMDc.jpg',
      animeId: 1,
    },
    {
      name: 'Goku',
      anime: 'Dragon Ball Z',
      powerLevel: 99,
      rank: 2,
      abilities: ['Kamehameha', 'Super Saiyan', 'Instant Transmission'],
      imageUrl: 'https://media.gq.com.mx/photos/5eb5954e51cd5e1b340e8b67/4:3/w_1460,h_1095,c_limit/dia-de-goku.png',
      animeId: 2,
    },
    {
      name: 'Izuku Midoriya',
      anime: 'My Hero Academia',
      powerLevel: 85,
      rank: 3,
      abilities: ['One For All', 'Super Strength', 'Speed'],
      imageUrl: 'https://www.ecured.cu/images/thumb/3/31/IzukuMidoriya.jpg/260px-IzukuMidoriya.jpg',
      animeId: 3,
    },
    {
      name: 'Alucard',
      anime: 'Hellsing',
      powerLevel: 95,
      rank: 4,
      abilities: ['Immortality', 'Regeneration', 'Super Strength'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSo7sbYnnjbh18m3rI0z19JfBcxdklJktCg&s',
      animeId: 4,
    },
    {
      name: 'Satoru Gojo',
      anime: 'Jujutsu Kaisen',
      powerLevel: 98,
      rank: 5,
      abilities: ['Infinity', 'Cursed Techniques', 'Immense Speed'],
      imageUrl: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2024/06/jujutsu-kaisen-gojo-husbando-anos-90-fanart.jpg',
      animeId: 5,
    },
    {
      name: 'Meliodas',
      anime: 'The Seven Deadly Sins',
      powerLevel: 90,
      rank: 6,
      abilities: ['Full Counter', 'Immortality', 'Super Strength'],
      imageUrl: 'https://static.wikia.nocookie.net/nanatsu-no-taizai/images/a/af/Meliodas_Anime.png/revision/latest?cb=20150719214811&path-prefix=es',
      animeId: 6,
    },
    {
      name: 'Luffy',
      anime: 'One Piece',
      powerLevel: 88,
      rank: 7,
      abilities: ['Gomu Gomu no Mi', 'Haki', 'Super Strength'],
      imageUrl: 'https://img.asmedia.epimg.net/resizer/v2/KBIIM5AMHFEYBOZBVDSGAYVCGA.jpg?auth=86fef4a3fcf939e095b5070c5c14e9ae815d0a53373002443f7f05ab4fb97238&width=644&height=362&smart=true',
      animeId: 7,
    },
  ];

  for (const character of characters) {
    await prisma.character.create({
      data: character,
    });
  }

  console.log('Personajes añadidos correctamente');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
