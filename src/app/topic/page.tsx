"use client";
import React, { useState } from "react";
import ParentContainer from "@/components/ui/parentContainer";
import { AwardIcon, ImageIcon, FilePlus, File, FileText } from "lucide-react";
import Image from "next/image";
import topic from "@/assets/topic.png";
import logo from "@/assets/ic_baseline-whatsapp.svg";
import { Trash2, Edit3, CirclePlus } from "lucide-react";
import CardContainer from "@/components/ui/CardContainer";
import Select from "react-select";
import { TopicSubjectsType } from "../shared/types";
import "./topic.css";
type Props = {};

const Subjects: Array<TopicSubjectsType> = [
  { subject: "Mathematics" },
  { subject: "English" },
  { subject: "Physics" },
  { subject: "Chemistry" },
];

const TopicPage = (props: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [output, setOutput] = useState([
    { image: "", title: "", description: "" },
  ]);

  const handleOutputAdd = () => {
    setOutput([...output, { image: "", title: "", description: "" }]);
    setPageOpen(false);
  };

  const handleDisplayForm = () => {
    setShowForm(true);
  };

  const handlePageOpen = () => {
    setOutput([...output, { image: "", title: "", description: "" }]);
    setPageOpen(true);
  };

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // defining the function
  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const [value, setValue] = useState(null);
  const options = [
    { value: "JAMB", label: "JAMB" },
    { value: "WAEC", label: "WAEC" },
    { value: "NECO", label: "NECO" },
    { value: "GCE", label: "GCE" },
  ];

  const subjectOptions = [
    { value: "MATHEMATICS", label: "Mathematics" },
    { value: "ENGLISH", label: "English" },
    { value: "PHYSICS", label: "Physics" },
    { value: "CHEMISTRY", label: "Chemistry" },
  ];

  return (
    <div className="w-[95%] mx-auto">
      <h4 className="text-[#525150] font-bold text-[16px] mb-5">Topics</h4>
      <div className="w-full">
        {showForm ? (
          <ParentContainer
            className={
              pageOpen
                ? "hidden"
                : "drop-shadow-md h-[520px] bg-[#FDFDFC] flex flex-row items-center justify-center gap-6 pt-7"
            }
          >
            {/* image */}
            <Image
              src={topic}
              alt="books"
              className="w-[45%] h-5/6 object-cover rounded-lg"
            />

            <div className="w-[45%]">
              <div className=" text-[#525150] text-center mb-3">
                <h6 className="text-sm font-bold mb-3">Topic Creation</h6>
                <p className=" text-lg font-medium">Organizing Topics</p>
              </div>
              <form className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="subject-title"
                    className="text-[#525150] text-sm mb-2"
                  >
                    Topic Title
                  </label>
                  <input
                    id="suject-title"
                    name="subject-title"
                    type="text"
                    required
                    className="text-[#525150] text-lg border py-1 border-[#CDCBC9] rounded-md"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="subject-certifications"
                    className="text-[#525150] text-sm"
                  >
                    Subject
                  </label>
                  <Select
                    options={subjectOptions}
                    defaultValue={value}
                    onChange={() => setValue}
                    placeholder=""
                    isSearchable
                    isMulti
                    styles={{
                      placeholder: (baseStyles, state) => ({
                        ...baseStyles,
                        fontSize: 12,
                        color: "#C9C9C9",
                      }),
                      dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        color: "#4D4D4D",
                        backgroundColor: "FAF9F8",
                      }),
                      container: (baseStyles) => ({
                        ...baseStyles,
                        borderColor: "transparent",
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
                        backgroundColor: "FAF9F8",
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
                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="subject-certifications"
                    className="text-[#525150] text-sm"
                  >
                    Certification
                  </label>
                  <Select
                    options={options}
                    defaultValue={value}
                    onChange={() => setValue}
                    placeholder=""
                    isSearchable
                    isMulti
                    styles={{
                      placeholder: (baseStyles, state) => ({
                        ...baseStyles,
                        fontSize: 12,
                        color: "#C9C9C9",
                      }),
                      dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        color: "#4D4D4D",
                        backgroundColor: "FAF9F8",
                      }),
                      container: (baseStyles) => ({
                        ...baseStyles,
                        borderColor: "transparent",
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
                        backgroundColor: "FAF9F8",
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
                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="description"
                    className="text-[#525150] text-sm mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="cert-decription"
                    rows={4}
                    cols={50}
                    required
                    className="text-[#525150] rounded-md border border-[#CDCBC9] text-lg"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={handlePageOpen}
                  className="text-[#FFFFFF] text-sm font-medium cursor-pointer bg-[#0086FF] rounded-md w-[50%] mx-auto mt-4 py-3"
                >
                  Create Topic
                </button>
              </form>
            </div>
          </ParentContainer>
        ) : (
          <ParentContainer className="drop-shadow-md h-screen bg-[#FDFDFC] relative flex flex-col items-center justify-center gap-3">
            <FileText className="w-12 h-12 text-[#525150]" />
            <h4 className="text-[#525150] font-bold text-lg">Topic</h4>
            <div className="text-center mb-1">
              <p className="text-[#333333] font-bold">
                You dont have any Topic Set yet...
              </p>
              <p className="text-[#525150]">
                Click{" "}
                <span className="text-[#333333] font-bold">Create Topic</span>{" "}
                to create your First Topic
              </p>
            </div>

            <button
              onClick={handleDisplayForm}
              className="bg-[#0086FF] text-[#FDFDFC] font-bold text-sm py-2 px-6 w-[20%] rounded-md mb-2 "
            >
              Create Topic
            </button>
            <div className="bg-[#C8CDD6] w-[5%] h-1 rounded-3xl"></div>
          </ParentContainer>
        )}
      </div>
      {pageOpen && (
        <div className="flex flex-row-reverse gap-4 w-full">
          <CardContainer className="w-[72%] h-[300px]">
            <div className="flex justify-between text-[#525150]">
              <h6 className="text-lg font-bold">Details</h6>
              <div>
                <p className="text-sm">{Date()}</p>
              </div>
            </div>
            <div className="h-[220px] details">
              <div className="h-auto flex gap-3 mt-5">
                <div className="bg-[#ACEDDF] w-[8%] flex items-center justify-center rounded-lg">
                  <File className="text-[#525150] w-4 h-4" />
                </div>
                <div className="rounded-lg text-[#525150] border border-[#CDCBC9] w-full flex justify-between relative p-3 mr-5">
                  <div>
                    <h6 className="font-medium text-lg">Topics</h6>
                    <p className="text-sm underline underline-offset-4 decoration-[#525150]">
                      Essential Mathematics.pdf
                    </p>
                    <p className="text-sm underline underline-offset-4 decoration-[#525150]">
                      Essential Mathematics.pdf
                    </p>
                  </div>
                  <Edit3 className="absolute bottom-9 right-6" />
                </div>
              </div>

              {/* second */}

              <div className="h-auto flex gap-3 mt-5">
                <div className="bg-[#ACEDDF] w-[8%] flex items-center justify-center rounded-lg">
                  <File className="text-[#525150] w-4 h-4" />
                </div>
                <div className="rounded-lg text-[#525150] border border-[#CDCBC9] w-full flex justify-between relative p-3 mr-5">
                  <div>
                    <h6 className="font-medium text-lg">Topics</h6>
                    <p className="text-sm underline underline-offset-4 decoration-[#525150]">
                      Essential Mathematics.pdf
                    </p>
                    <p className="text-sm underline underline-offset-4 decoration-[#525150]">
                      Essential Mathematics.pdf
                    </p>
                  </div>
                  <Edit3 className="absolute bottom-9 right-6" />
                </div>
              </div>
              {/* third */}
              <div className="h-auto flex gap-3 mt-5">
                <div className="bg-[#ACEDDF] w-[8%] flex items-center justify-center rounded-lg">
                  <File className="text-[#525150] w-4 h-4" />
                </div>
                <div className="rounded-lg text-[#525150] border border-[#CDCBC9] w-full flex justify-between relative p-3 mr-5">
                  <div>
                    <h6 className="font-medium text-lg">Topics</h6>
                    <p className="text-sm underline underline-offset-4 decoration-[#525150]">
                      Essential Mathematics.pdf
                    </p>
                    <p className="text-sm underline underline-offset-4 decoration-[#525150]">
                      Essential Mathematics.pdf
                    </p>
                  </div>
                  <Edit3 className="absolute bottom-9 right-6" />
                </div>
              </div>
            </div>
          </CardContainer>

          <CardContainer className="w-[28%] h-[300px]">
            <table className="border-separate border-spacing-3 text-[15px] text-[#525150] pr-3">
              <thead>
                <tr>
                  {/* <input type="checkbox" />
                  <td className="px-3 font-bold">Subject</td> */}
                  <th>
                    <span className="flex gap-3">
                    <input type="checkbox"/>
                    Subject
                  </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Subjects.map((d, i) => (
                  <tr key={i}>
                    <td>
                    <span className="flex gap-2">
                      <input onClick={() => setButtonClicked(true)} type="checkbox" className="bg-[#0086FF]"/>
                      <input type="text" value={d.subject} className={buttonClicked && d.subject === 'Mathematics' ? "bg-[#FAF9F8] border-none drop-shadow-lg py-2 rounded-lg pl-2":"py-2 bg-transparent border border-[#C9C9C9] rounded-lg pl-2"}/>
                    </span>
                    </td>
                    {/* <input type="checkbox" />
                    <td className="border w-full px-2 py-1 rounded-lg">
                      {d.subject}
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContainer>
        </div>
      )}
    </div>
  );
};

export default TopicPage;
