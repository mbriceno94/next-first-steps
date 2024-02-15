import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    keywords: ["ContactPage","Fernanndo", "información", "..."]
  };


export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}