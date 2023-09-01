# ToDo-List

This is a small website for managing a to-do list. It was created using React JS to showcase the knowledge of an individual project. This project aims to help people manage their daily tasks and steps by providing their tasks into this website.

![Untitled](https://github.com/anb-hq/CnD_HoeZeIl_ToDoList/assets/137028502/291a6f1b-8b7b-491a-abc5-3599235ae7c9)
)

## Components:’

There are Three main components which provided into this project:

**Header Component:** This component includes a search bar that allows users to navigate their tasks. The results of the tasks will appear based on the search input in the main component.

**Sidebar Component:** This component allows the user to sort tasks based on importance, completion status, or input order.

**Main Component: U**sers will enable to manage their tasks by adding, modifying, deleting, or marking them as completed or important in this component.

## Git Flow Method:

1. Main Branch:
   - This branch represents the production-ready code.
   - The main branch is the primary branch of the project.
2. Develop Branch:
   - It used for ongoing development work.
   - It servers as a staging area where features, release and hotfix merge in together after completed.
   - Once the code on develop branch are stabled, it can be merged into main branch to create a new release.
3. Feature Branch:
   - Feature branch are created for the development of new features or enhancements.
   - Each feature branch focuses on a specific feature or task:
     - `feature/PageLayout`
     - `feature/MyTask`
     - `feature/CompleteTask`
     - `feature/ImportantTask`
     - `feature/CurrentDate`
   - Once feature is completed, it can be merged into develop branch.
4. Release Branch:
   - A release branch is created when ready to merge into main branch.
     - `release/1.0`
   - Once the release is ready, the release branch can merge into main branch.
5. Bugfix Branch:
   - Bugfix simply branch from release branch, to fix any bug base on QA testing.
     - `bugfix/FixBug`
   - Once the bug fixed, it will be merge back into release branch.
6. HotFix Branch:
   - This branch is similar to bugFix branch, but it creates from main branch and to fix to critical bug
     - `hotfix/1.1`

## Other Relevant:

Convention Guide Link: [Convention Guide](https://pond-swoop-a2d.notion.site/ToDo-List-487f8d9f61e74a739a888dbbea595149?pvs=4)

Figma: [UI Design](https://www.figma.com/file/6C3vDph3vjAf5fiUIAiLlt/Todo-List?type=design&node-id=89%3A2&mode=design&t=83VPynYDzG5z4st9-1)
