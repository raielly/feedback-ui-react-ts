import { ThemeProvider } from "@/components/theme-provider";

//import { ModeToggle } from "./components/mode-toggle";
import FeedbackForm from "./components/feedback-form";
import FeedbackLists from "./components/feedback-lists";
import FeedbackStatus from "./components/feedback-status";
import { Card, CardTitle } from "./components/ui/card";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <>
      <FeedbackProvider>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <div className='flex flex-col justify-between h-screen'>
            <Card className='p-5 mb-10 text-center rounded-none'>
              <CardTitle>Feedback UI</CardTitle>
            </Card>
            <div className='p-5 md:p-0 w-full md:w-96 mx-auto'>
              <FeedbackForm />
              <FeedbackStatus />
              <FeedbackLists />
            </div>
            <div className='text-center mt-20 p-5 font-semibold'>
              ReactJS 👀
            </div>
          </div>
          {/* <ModeToggle /> */}
        </ThemeProvider>
      </FeedbackProvider>
    </>
  );
}

export default App;
