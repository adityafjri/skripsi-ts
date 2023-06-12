// import prisma from '../../lib/prisma';
// import { ListUndangProps } from '../../components/Post';

// export default async function getFeed(searchTerm: string): Promise<ListUndangProps[]> {
//     const feed = await prisma.listUndang.findMany({
//         take: 20,
//         where: {
//         judul: {
//             contains: searchTerm,
//         },
//         },
//     });
//     console.log(feed)
//     return feed;
// }
