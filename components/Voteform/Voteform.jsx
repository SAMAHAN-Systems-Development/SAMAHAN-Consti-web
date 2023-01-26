import React from "react";
import styles from "./Voteformstyles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
export default function Voteform() {
  
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [RadioAnswer, setRadioAnswer] = useState("");
  const [nameLength, setNameLength] = useState("");
  const handleNamelen = event => {
    setNameLength(event.target.value);
  };
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValid()) {
      try {
        const datas = {
          Name,
          Email,
          RadioAnswer,
        };
        // console.log(datas);
        // try {
        //   // const {info} = await axios ({
        //   //     url: "/api/datasend",
        //   //     method: "POST",
        //   //     data: datas,
        //   // })
        //   // console.log("res back", info)
        await axios
          .post("https://visionary-peony-079a58.netlify.app/api/datasend", datas)
          .then((result) => {
            console.log("here is the res", result.data);
          });
          router.push('./Submission');

      } catch (err) {
        console.log(err);
      }
    }
  };

  const isValid = () => {
    if (!Name.match(`^[a-zA-Z][a-zA-Z ]*[a-zA-Z]-?[a-zA-Z ]*[a-zA-Z]$`)) {
      toast.error("Invalid name.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (!Email.match(`^[a-zA-Z0-9._%+-]+@addu\.edu\.ph$`)) {
      toast.error("Invalid email.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    if (RadioAnswer === "") {
      toast.error("Selection cannot be empty.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    
    return true;
  
  };

  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <h1 className={styles.head}>VOTE HERE!</h1>
        <form>
          <div className={styles.section}>
            <div className={styles.input_group}>
              <div>
                <div className={styles.floating_input}>
                  <input
                    name="Name"
                    type="text"
                    placeholder="Ex. Juan Garcia Cruz"
                    onChange={({ target }) => setName(target?.value)}
                    className={styles.input}
                    pattern="^[a-zA-Z][a-zA-Z ]*[a-zA-Z]-?[a-zA-Z ]*[a-zA-Z]$"
                    required
                  />
                  <label htmlFor="Name">Full Name</label>
                </div>
              </div>
              <div>
                <div className={styles.floating_input}>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Ex. jgcruz@addu.edu.ph"
                    onChange={({ target }) => setEmail(target?.value)}
                    className={styles.input}
                    pattern="^[a-zA-Z0-9._%+-]+@addu\.edu\.ph$"
                    required
                  />
                  <label htmlFor="Email">AdDU Email</label>
                </div>
              </div>
            </div>

            <div className={styles.radio_group}>
              <h3 className={styles.text}>
              Are you in favor of ratifying the proposed amendments to the 2020 SAMAHAN Constitution?
              </h3>
             
              <div className={styles.radio}>
                Yes{" "}
                <input
                  type="radio"
                  name="RadioAnswer"
                  value="Yes"
                  id=""
                  className={styles.rinput}
                  onClick={({ target }) => setRadioAnswer(target?.value)}
                  required
                />
                No{" "}
                <input
                  type="radio"
                  name="RadioAnswer"
                  value="No"
                  id=""
                  className={styles.linput}
                  onClick={({ target }) => setRadioAnswer(target?.value)}
                  required
                />
              </div>
            </div>
            <button
              type="button"
              value="Submit"
              onClick={handleSubmit}
             
              className={styles.button}
            >
              Submit
            </button>
          </div>
        </form>
        <a href="https://tinyurl.com/Updated2020SMHNConsti"> <button className={styles.ammendments}>Click to view proposed amendments </button></a>
      </div>
    </div>
  );
}
