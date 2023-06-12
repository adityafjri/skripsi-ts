import React from "react";
import Router from "next/router";

export type ListUndangProps = {
    id: number
    judul: string
    tentang: string
}

const ListUndang: React.FC<{ listUndang: ListUndangProps }> = ({ listUndang }) => {
    const handleClick = () => {
    Router.push("/list-undang/[id]", `/list-undang/${listUndang.id}`)
}

    return (
        <div onClick={handleClick} className="w-full  max-w-xl p-2 border border-black shadow-md overflow-hidden max-h-28">
            <h2 className="text-lg font-semibold ">Undang Undang No.{listUndang.judul}</h2>
            <h3 className="">Topik :</h3>
            <div className="h-20 pb-2 overflow-y-scroll">
                <p className="mx-4">{listUndang.tentang}</p>
            </div>
        </div>
    )
}

export default ListUndang;
