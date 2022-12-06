import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 12;

  await prisma.user.upsert({
    where: { email: 'secret_k33per@outlook.com' },
    update: {},
    create: {
      email: 'secret_k33per@outlook.com',
      username: 'SecretKeeper',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/72c7b374-81e4-4f0f-92b3-0cff95ef4014/d95mk6p-630b65e5-c01d-4102-87e6-bb20de20e261.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyYzdiMzc0LTgxZTQtNGYwZi05MmIzLTBjZmY5NWVmNDAxNFwvZDk1bWs2cC02MzBiNjVlNS1jMDFkLTQxMDItODdlNi1iYjIwZGUyMGUyNjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X-CXBx7k0A01txKwSmkrUcuScBcUuIYZVKO3sGApTtA',
      profile: {
        create: {
          description: 'Check out Prisma with Next.js',
          status: 'In The Shadows',
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'julie@gmail.com' },
    update: {},
    create: {
      email: 'julie@gmail.com',
      username: 'Julie',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar: 'https://i1.sndcdn.com/artworks-000102605413-57gt1d-t500x500.jpg',
      profile: {
        create: {
          description:
            'I am an experienced joiner with well developed skills and experience in groundwork, concrete finishing and steel fixing and have worked in the construction industry since 1982. I am also a skilled labourer who has supported many different trades over the years. I have a full clean UK driving licence with entitlement of up to 7.5 tonne. I am keen to return to work after a period of training and personal development which has broadened my skills and experiences.',
          status: 'Do Everything in Love',
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'ashley@gmail.com' },
    update: {},
    create: {
      email: 'ashley@gmail.com',
      username: 'Ashley',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
      profile: {
        create: {
          description:
            'I am a professionally qualified fire engineer with 7 years experience. I have recently achieved RTITB accreditation in the use of Counterbalance fork lift trucks and I am seeking employment that will make best use of my skills and allow me to develop them further. I am determined and enthusiastic, I have developed good planning & organisational skills and am confident working independently or as part of a team. I am flexible regarding working hours and am able to work a range of shifts.',
          status: 'If you can dream it, you can do it',
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'anna@gmail.com' },
    update: {},
    create: {
      email: 'anna@gmail.com',
      username: 'Anna',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
      profile: {
        create: {
          description: `I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.
          Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
          A key strength is communication; building strong relationships with people in order to deliver the best results.
          Recently, I completed an Open degree, including Business and Design modules at the Open University and I am now fully employed by Clearly Presented as a Digital Media Manager.`,
          status: 'Don`t tell people your dreams, show them',
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'jill@gmail.com' },
    update: {},
    create: {
      email: 'jill@gmail.com',
      username: 'Jill',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar:
        'https://i.pinimg.com/originals/69/37/79/693779a81d01470d77dc4deb33771770.jpg',
      profile: {
        create: {
          description:
            'Exceptionally skilled Journalism graduate with a knack for finding stories and presenting them to the public. Looking for an entry-level position in a media house that stands true to the ethics of journalism and would utilize my creative and professional skills to best use. Possess good communication skills and have an eye for detail. Flexible and willing to work in any environment as and when needed.',
          status: 'Life is a beautfiul struggle',
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'emma@gmail.com' },
    update: {},
    create: {
      email: 'emma@gmail.com',
      username: 'Emma',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar:
        'https://static.wikia.nocookie.net/theislands/images/3/3a/Emma-watson_main_character_pic.jpg/revision/latest?cb=20141209181518',
      profile: {
        create: {
          description: `A highly innovative individual with a keen interest in developing creative case strategies and writing effective briefs. Possess excellent argument techniques and ideas that help in winning cases. Ready to work in a dynamic environment that offers opportunities to grow and learn new things in the legal field.
          A profile summary is a synopsis of your skills and expertise. And since you are just starting your career, it is always a great idea to put forth your skills, goals, and experience to take over on the dream job you are looking for.`,
          status: 'The worst kind of sad is not being able to explain why',
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'oliver@gmail.com' },
    update: {},
    create: {
      email: 'oliver@gmail.com',
      username: 'Oliver',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar:
        'https://s3.ir-thr-at1.arvanstorage.com/messenger/user-39-avatar.jpeg',
      profile: {
        create: {
          description:
            'A creative and strategic thinker motivated to build a career in Public Relations. Capability to communicate and generate brand awareness in an innovative way. Strong interpersonal communication. Skillful at event planning and organizing. Willing to explore PR strategies that help business increase revenue.',
          status: 'Everyday is a second chance',
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'kevin@gmail.com' },
    update: {},
    create: {
      email: 'kevin@gmail.com',
      username: 'Kevin',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar:
        'https://s3.ir-thr-at1.arvanstorage.com/messenger/user-39-avatar.jpeg',
      profile: {
        create: {
          description: 'Check out Prisma with Next.js',
          status: 'In The Shadows',
        },
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'mason@gmail.com' },
    update: {},
    create: {
      email: 'mason@gmail.com',
      username: 'Mason',
      password: await bcrypt.hash('secret33', saltRounds),
      avatar:
        'https://s3.ir-thr-at1.arvanstorage.com/messenger/user-39-avatar.jpeg',
      profile: {
        create: {
          description:
            'Seeking an opportunity to serve as a School Teacher for a reputed group. B.ed and Masters in ABC. Skilled in Classroom Management and Lesson Planning. Capable of building an open and interactive environment to help students express themselves in a better way. Proficient in a range of teaching styles and communication.',
          status: 'Happiness is an inside job',
        },
      },
    },
  });
}
main()
  .then(async () => {
    console.log('\x1b[32m', 'All records successfully inserted', '\x1b[0m');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
