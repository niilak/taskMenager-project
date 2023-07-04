import React from "react";
import home from "./home.module.scss";
import TaskBox from "./taskBox/TaskBox";

const Home = () => {
  return (
    <>
      <h2>Home komponenta</h2>
      <div className={home.home_container}>
        <div className={`${home.search_bar}`}>
          <span>
            <img src="search-icon.png" alt="Search" />
          </span>
          <input placeholder="Search" />
        </div>
        <div className={home.home_table}>
          <div className={home.table_col}>
            <span className={home.task_col}>Wishlist</span>

            <TaskBox
              taskHeader="Go to gym"
              taskDescription="Today is a leg day"
            />
          </div>

          <div className={home.table_col}>
            <span className={home.task_col}>To Do</span>
            <TaskBox
              taskHeader="Homework at amplitudo"
              taskDescription="Check your homework"
            />
            <TaskBox
              taskHeader="Make pancake for meal"
              taskDescription="You have recepi for protein chocolate pancakes with 1,5 scoops of protein"
            />
            <TaskBox
              taskHeader="Coffe with Ana"
              taskDescription="at 8 o'clock"
            />
          </div>

          <div className={home.table_col}>
            <span className={home.task_col}>In progress</span>
            <TaskBox
              taskHeader="Read a book"
              taskDescription="Today you need to read minimum 35 pages!"
            />
          </div>

          <div className={home.table_col}>
            <span className={home.task_col}>Done</span>
            <TaskBox
              taskHeader="Clean your room"
              taskDescription="Don't forget to clean your desk and computer. You forget to do it last week!"
            />
          </div>
        </div>
      </div>
      {/* Home */}
      {/*---Search*/}
      {/*---Task table  */}
    </>
  );
};

export default Home;
