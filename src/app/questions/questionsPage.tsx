import ParentContainer from "@/components/ui/parentContainer";
import React, { useState } from "react";
import Select from "react-select";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ChevronLeftIcon, ChevronRightIcon, CirclePlus } from "lucide-react";

type Props = {};

const QuestionsPage = (props: Props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [value, setValue] = useState(null);
  const options = [
    { value: "Objective", label: "Objective" },
    { value: "Subjective", label: "Subjective" },
    { value: "Theory", label: "Theory" },
  ];

  const answerTypeOptions = [
    { value: "Multiple Choice", label: "Multiple Choice" },
    { value: "Multiple Choice", label: "Multiple Choice" },
  ];
  return (
    <ParentContainer className="h-auto">
      <div className="w-[95%] mx-auto text-[#525150] mt-5">
        <h3 className="text-xl font-medium">Create Questions</h3>
        <div className="w-full flex flex-col gap-2 mt-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="question-header" className="text-xs">
              Past Question Header
            </label>
            <input
              type="text"
              id="question-header"
              className="bg-transparent border border-[#CDCBC9] rounded-lg py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="year" className="text-xs">
              Year
            </label>
            <input
              id="year"
              type="text"
              className="bg-transparent border border-[#CDCBC9] rounded-lg py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="index" className="text-xs">
              Index
            </label>
            <input
              id="index"
              type="text"
              className="bg-transparent border border-[#CDCBC9] rounded-lg py-2"
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <div className="flex gap-1 items-center">
            <ChevronLeftIcon />
            <span className="font-medium">Question 1</span>
            <ChevronRightIcon />
          </div>
          <div>
            <label htmlFor="question-category" className="text-xs">
              Category
            </label>
            <Select
              id="question-category"
              options={options}
              defaultValue={value}
              onChange={() => setValue}
              placeholder=""
              isSearchable
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  fontSize: 12,
                  color: "#C9C9C9",
                }),
                dropdownIndicator: (baseStyles) => ({
                  ...baseStyles,
                  color: "#4D4D4D",
                  backgroundColor: "#FAF9F8",
                }),
                container: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "#CDCBC9",
                  borderRadius: 12,
                }),
                option: (baseStyles) => ({
                  ...baseStyles,
                  color: "#666666",
                  fontSize: 15,
                  fontWeight: 400,
                  backgroundColor: "transparent",
                }),
                valueContainer: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "transparent",
                  backgroundColor: "#FAF9F8",
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: "#666666",
                  fontSize: 15,
                  fontWeight: 400,
                }),
              }}
            />
          </div>
          <div>
            <label htmlFor="answer-type" className="text-xs">
              Answer Type
            </label>
            <Select
              id="answer-type"
              options={answerTypeOptions}
              defaultValue={value}
              onChange={() => setValue}
              placeholder=""
              isSearchable
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  fontSize: 12,
                  color: "#C9C9C9",
                }),
                dropdownIndicator: (baseStyles) => ({
                  ...baseStyles,
                  color: "#4D4D4D",
                  backgroundColor: "#FAF9F8",
                }),
                container: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "#CDCBC9",
                  borderRadius: "12px",
                }),
                option: (baseStyles) => ({
                  ...baseStyles,
                  color: "#666666",
                  fontSize: 15,
                  fontWeight: 400,
                  backgroundColor: "transparent",
                }),
                valueContainer: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "#CDCBC9",
                  backgroundColor: "#FAF9F8",
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: "#666666",
                  fontSize: 15,
                  fontWeight: 400,
                }),
              }}
            />
          </div>
          <div className="border p-3 rounded-lg mt-3 mb-3">
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
          </div>
          <p className="text-xs">Type in the exam question.</p>
          <hr className="mt-9 bg-[#525150]"></hr>

          <div className="w-full mt-4">
            <h4 className="font-medium">Answer</h4>
            <p className="text-xs">
              Mark the correct Answer, after providing the answers.
            </p>
            <div className="flex items-center gap-5 mt-3 w-full">
              <div className="flex flex-col gap-[3px] w-[30%]">
                <label htmlFor="option" className="text-xs">
                  Option
                </label>
                <input
                  id="option"
                  type="text"
                  className="bg-transparent border border-[#CDCBC9] rounded-lg text-lg py-1"
                />
              </div>
              <div className="flex flex-col gap-[3px] w-[50%]">
                <label htmlFor="option" className="text-xs">
                  Answer
                </label>
                <input
                  id="option"
                  type="text"
                  className="bg-transparent border border-[#CDCBC9] rounded-lg text-lg py-1"
                />
              </div>
                <button className=" flex items-center justify-center border border-[#525150] text-[#525150] py-2 px-2 rounded-lg mt-4">
                    <CirclePlus className="w-5 h-5"/><span className="text-xs">Add Answer</span>
                </button>
            </div>
            <div className="mt-2 flex flex-col gap-[3px]">
              <label htmlFor="points" className="text-xs">
                Point for a correct answer.
              </label>
              <input
                id="points"
                type="text"
                className="bg-transparent border border-[#CDCBC9] rounded-lg text-lg w-[30%] py-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 mt-3">
          <button className="text-[#172041] border border-[#172041] bg-transparent rounded-lg text-sm font-medium px-9 py-2">
            Save
          </button>
          <button className="text-sm text-[#FFFFFF] bg-[#0086FF] rounded-lg py-2 px-2">
            Save and add next question
          </button>
          <button className="underline underline-offset-2 decoration-[#525150] text-sm">
            Cancel
          </button>
        </div>
      </div>
    </ParentContainer>
  );
};

export default QuestionsPage;
