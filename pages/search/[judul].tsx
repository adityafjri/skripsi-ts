import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import ListUndang, { ListUndangProps } from "../../components/Post";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

type Props = {
    searchResults: ListUndangProps[]
}

const SearchResultPage: React.FC<Props> = ({ searchResults }) => {
    const router = useRouter()
    const { judul, page = "1" } = router.query

    // pagiansi
    const currentPage = Number(page)
    const itemsPerPage = 10
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedResults = searchResults.slice(startIndex, endIndex)

    const totalPages = Math.ceil(searchResults.length / itemsPerPage)

    // const handlePageChange = (newPage: number) => {
    //     router.push(`/searchResult/${judul}?page=${newPage}`)
    // }

    return (
        <main className="w-full">
            <Navigation />
            <section className="w-fit mx-auto flex flex-col items-center my-8">
                <h1 className="py-4">Search results for " {judul} "</h1>
                {paginatedResults.length === 0 ? (
                    <p>No results found.</p>
                ) : (
                    <>
                        <div className="max-h-[100vh] overflow-y-scroll">
                            {paginatedResults.map((listUndang) => (
                                <div key={listUndang.id} className="post w-full px-8 py-4">
                                    <ListUndang listUndang={listUndang} />
                                </div>
                            ))}
                        </div>
                    
                        <div className="pagination inline-flex justify-start py-4 w-32 overflow-x-scroll">
                            {Array.from({ length: totalPages }, (_, index) => (
                            <Link
                                key={index + 1}
                                href={`/search/${judul}?page=${index + 1}`}
                            >
                                <a className={`mx-2 ${currentPage === index + 1 ? "active" : ""}`}>
                                    {index + 1}
                                </a>

                            </Link>
                            ))}
                        </div>
                    </>
                )}
            </section>
            <Footer />
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { judul } = context.params

    try {
        const searchResults = await prisma.listUndang.findMany({
            where: {
                OR: [
                {
                    judul: {
                    contains: judul as string,
                    mode: "insensitive",
                    },
                },
                {
                    tentang: {
                    contains: judul as string,
                    mode: "insensitive",
                    },
                },
                ],
            },
        })

        return {
            props: { searchResults },
        }
    } catch (error) {
        console.error("Error fetching search results:", error)
        return {
            props: { searchResults: [] },
        }
    }
}

export default SearchResultPage;
