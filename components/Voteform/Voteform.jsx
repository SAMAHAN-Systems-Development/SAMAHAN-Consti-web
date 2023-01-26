import React from "react";
import styles from "./Voteformstyles.module.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Voteform() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [RadioAnswer, setRadioAnswer] = useState("");
  const [nameLength, setNameLength] = useState("");
  const handleNamelen = event => {
    setNameLength(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (RadioAnswer) {
       const datas = {
         Name,
         Email,
         RadioAnswer
       };
     
         await axios.post("http://localhost:3000/api/datasend", datas).then((result) => {
           console.log("here is the res", result.data);
        });
      // } catch (err) {
      //   console.log(err);
      // }
    } else {
      toast.error("No option selected.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
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
                Do you agree with the amendment for the 2023 SAMAHAN
                constitution?
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
                />
                No{" "}
                <input
                  type="radio"
                  name="RadioAnswer"
                  value="No"
                  id=""
                  className={styles.linput}
                  onClick={({ target }) => setRadioAnswer(target?.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              value="Submit"
              onClick={handleSubmit}
             
              className={styles.button}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
