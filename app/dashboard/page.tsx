import SearchBar from "@/components/SearchBar";
import UsersTable from "@/components/Userstable";

function dashboard() {
    return (
        
        <div className="w-[90%] h-[85%] flex flex-col rounded-lg shadow-2xl">
            <div className="mt-10">
              <SearchBar/>
            </div>
            <div className="h-full mt-10 max-h-[515px] overflow-auto">
              <UsersTable/>
            </div>
        </div>
    );
  }

export default dashboard;