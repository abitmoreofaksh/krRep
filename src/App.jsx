import { Rating } from "@mui/material";
import "./App.css";
import Checkbox from "./components/Checkbox";
import styled from "@emotion/styled";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "white",
  },
  "& .MuiRating-iconHover": {
    color: "white",
  },
});

function App() {
  const arr = [
    "Marketing Strategy",
    "UI Design",
    "Excel",
    "Adobe Photoshop",
    "CRM",
    "Photography",
    "Content Making",
  ];
  const level = ["Beginner", "Intermediate", "Professional"];
  const cat = ["Sales", "Hui", "Drawing", "Big Data", "Design"];
  const Recommended = [
    {
      title: "Ux Research",
      author: "John Doe",
    },
    {
      title: "UX Essentials",
      author: "Jane Smith",
    },
    {
      title: "UX for Beginners",
      author: "Akshit",
    },
    {
      title: "How to UX ?",
      author: "Ben Starter",
    },
  ];
  return (
    <div className=" bg-black h-[100vh] overflow-auto">
      <div className="p-5 text-4xl text-white">Discover Courses</div>
      <div className="p-5 flex gap-5">
        <input
          type="text"
          className=" w-96 h-9 bg-white/50 placeholder:text-white p-2 rounded-full"
          placeholder="Search for courses...."
        />
        <button className="bg-pur w-24 rounded-full text-white">Search</button>
      </div>
      <div className="p-5 text-white border-t border-slate-50/10">
        <div>Popular Courses</div>
        <div className="flex gap-5 mt-4">
          {arr.map((item, index) => (
            <div className="p-3 text-black  rounded-full bg-white" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="text-white p-5 border-t border-slate-50/10">
        <div>Course Categories</div>
        <div className="mt-4 flex gap-5">
          {cat.map((item, index) => (
            <div className="flex gap-1 items-center" key={index}>
              <Checkbox />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white p-5 grid grid-cols-3 border-t border-slate-50/10">
        <div>
          <div>Rating</div>
          <div className="mt-3">
            <StyledRating defaultValue={5} precision={0.5} />
          </div>
        </div>
        <div>
          <div>Level</div>
          <div className="mt-3 flex gap-8">
            {level.map((item, index) => (
              <div className="flex gap-1 items-center" key={index}>
                <Checkbox />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 text-white border-t border-slate-50/10">
        <div>Recommended for You</div>
        <div className="mt-4 flex gap-12">
          {Recommended.map((item, index) => (
            <div>
              <img
                src="https://images.unsplash.com/photo-1685097879207-1a897190300f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                alt=""
                className="h-28 rounded-lg"
              />
              <div className="text-xl">{item.title}</div>
              <div className="text-sm">{item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
