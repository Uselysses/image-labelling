import { useState } from 'react'

function App() {
  const trueOrFalseProps = {
    taskId: "22",
    userId: "1",
    imageUrl: "https://media.istockphoto.com/id/1130731707/photo/hot-dog-on-white.jpg?s=612x612&w=0&k=20&c=QI_McOEiNf7lcxx_kq7_LUXJIrBWNMlfqdwDK4JcbvY=",
    question: "Is this a hotdog?",
    options: ["Yes", "No"]
  }

  const output = {
    taskId: "22",
    userId: "1",
    answer: "Yes"
  }

  const Task = ({ taskId, userId, imageUrl, question, options }) => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
      console.log(event.target.taskId.value)
      console.log(event.target.userId.value)
      console.log(event.target.input.value)

      setSubmitted(true)
    }

    const SubmitButton = () => {
      return (
        <button className="btn btn-primary">
          Submit
        </button>
      )
    }

    const LoadingButton = () => {
      return (
        <button disabled={true} className="flex btn btn-disabled">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-500"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24">
            <circle className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4">
            </circle>
            <path className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          Submitting...
        </button>
      )
    }

    const TrueOrFalseForm = () => {
      return (
        <>
          <script type='text/javascript' src='https://s3.amazonaws.com/mturk-public/externalHIT_v1.js'></script>
          <form method="post" id="mturk_form" action="https://workersandbox.mturk.com/mturk/externalSubmit" onSubmit={handleSubmit} className="space-y-2">
            <input type="hidden" name="taskId" value={taskId} />
            <input type="hidden" name="userId" value={userId} />
            <fieldset>
              <legend>{question}</legend>
              <ul>
                { options.map((option) => (
                  <li className="flex justify-between w-1/2">
                    <label htmlFor={option}>{option}</label>
                    <input id={option}
                           type="radio"
                           name="input"
                           value={option} />
                  </li>
                )) }
              </ul>
            </fieldset>

            {submitted ? <LoadingButton /> : <SubmitButton />}
          </form>
          <script language='Javascript'>turkSetAssignmentID()</script>
        </>
      )
    }

    return (
      <div className="w-3/4 md:w-1/2 mx-auto mt-20 md:grid md:grid-cols-2 md:gap-16">
        <img src={imageUrl} />
        <div className="">
          <TrueOrFalseForm />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Task {...trueOrFalseProps} />
    </div>
  )
}

export default App
