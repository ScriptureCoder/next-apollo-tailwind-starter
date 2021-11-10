import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {FEATURED_BOOKS} from "../../utils/queries";
import ErrorInline from "../errors/error-inline";
import Preloader from "../global/preloader";
import Link from 'next/link';

export type FeaturedProps = {
    books:any[]
}

const Featured: React.FC<FeaturedProps> = ({books}) => {
    /*const {data, loading,fetchMore, error,refetch} = useQuery(FEATURED_BOOKS,{variables:{page:1,limit:5}});

    useEffect(()=>{
        if (data || error) {
            fetchMore({
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return Object.assign({}, prev, fetchMoreResult);
                }
            }).catch(()=>{});
        }
    },[]);

    if (loading) return <Preloader/>;
    if(error) return <ErrorInline refetch={refetch} error={error}/>;*/

    return (
        <section className="py-10 bg-shade">
            <div className="container max-w-6xl ">
                <h3 className="text-4xl font-bold text-center capitalize mb-4">Discover Amazing Books</h3>
                <div className='flex flex-wrap px-2'>
                    {books.map((data:any,index:any)=>(
                        <div key={index} className="w-1/3 sm:w-1/4 md:w-1/6 p-2 px-2 md:px-3">
                            <Link href={`/book/${data.slug}`}>
                                <div className="p-1 md:p-2 text-sm flex flex-col bg ">
                                    <img src={`${data.image}?w=250&h=300`} alt="" className="w-28 h-36 md:w-40 md:h-58 mb-2 img-gray self-center"/>
                                    <div className="h-24">
                                        <p className="w-full capitalize text text-left">
                                            <span>{data.title?.substr(0,36).toLocaleLowerCase()}{data.title?.length > 36 && "..."}</span>
                                            <br/>
                                            <span className="text-medium">{data.author?.name.toLocaleLowerCase()}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-10 text-center">
                <Link href="/login">
                    <a className="bg-primary text-white rounded-md px-10 py-4">View More</a>
                </Link>
            </div>
        </section>
    );
};



export default Featured;
