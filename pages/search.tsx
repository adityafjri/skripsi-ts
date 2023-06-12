import React from "react";
import { GetServerSideProps } from "next";
import ListUndang, { ListUndangProps } from "../components/Post";
import prisma from '../lib/prisma';
import Router from "next/router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PAGE_SIZE = 30; // Number of items to fetch per page

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchTerm = Array.isArray(context?.params?.search)
    ? context?.params?.search[0]
    : "";

  try {
    // Get the total count of matching records
    const totalCount = await prisma.listUndang.count({
      where: {
        judul: {
          contains: searchTerm,
        },
      },
    });

    // Calculate the number of pages based on the total count and page size
    const totalPages = Math.ceil(totalCount / PAGE_SIZE);

    // Generate a random page number
    const randomPage = Math.floor(Math.random() * totalPages) + 1;

    // Fetch the data for the random page with pagination
    const feed = await prisma.listUndang.findMany({
      take: PAGE_SIZE,
      skip: (randomPage - 1) * PAGE_SIZE,
      where: {
        judul: {
          contains: searchTerm,
        },
      },
    });

    return {
      props: {
        feed,
        searchTerm,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        feed: [],
        searchTerm,
      },
    };
  }
};

type Props = {
  feed: ListUndangProps[];
  searchTerm: string;
};

const Home = ({ feed, searchTerm }: Props) => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("search")?.toString() || "";
    Router.push(`/search/${searchTerm}`);
  };

  return (
    <main className="w-full">
      <Navigation />
      <section className="w-fit mx-auto flex flex-col items-center my-8">
        <form onSubmit={handleSearch} className="w-fit my-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-black px-4 py-4 "
            name="search"
          />
          <button type="submit" className="mx-4 bg-black text-white py-4 px-4 border-no">
            Search
          </button>
        </form>

        <div className="max-h-[100vh] overflow-y-scroll">
          {feed.map((listUndang) => (
            <div key={listUndang.id} className="post w-full px-8 py-4">
              <ListUndang listUndang={listUndang} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
