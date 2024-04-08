"use client"
import UsersTable from "@/components/Userstable";
import SearchBar from "@/components/SearchBar";

export default function Advisor() {

    return (
      <>
        <div className="w-[90%] h-[85%] flex flex-col rounded-lg shadow-2xl">
            <div className="mt-10">
                <SearchBar/>
            </div>
            <div className="h-full mt-10 overflow-auto">
                <UsersTable/>
            </div>
        </div>
      </>
    );
  }