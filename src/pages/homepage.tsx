import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [password, setPassword] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const navigator = useNavigate();
  const thePassword = "20082024";

  const SubmitHandler = () => {
    if (password === thePassword) {
      navigator("/home");
    }
  };

  useEffect(() => {
    setPassword("");
  }, []);

  useEffect(() => {
    if (password.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }

    if (password.length === 8) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [password]);

  return (
    <>
      <div className="grid justify-center items-center">
        <div className="h-7 w-40 justify-center items-center flex gap-5">
          <div className="min-w-5 justify-start items-center flex">
            {password.slice(0, 2)}
          </div>
          <div className="justify-center items-center flex">/</div>
          <div className="min-w-5 justify-center items-center flex">
            {password.slice(2, 4)}
          </div>
          <div className="justify-center items-center flex">/</div>
          <div className="min-w-10 justify-end items-center flex">
            {password.slice(4, 8)}
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-3 justify-center items-center">
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "1");
              }
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "2");
              }
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "3");
              }
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "4");
              }
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "5");
              }
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "6");
              }
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "7");
              }
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "8");
              }
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "9");
              }
            }}
          >
            9
          </button>
          <button
            className={`${isEmpty ? `` : `bg-red-500`}`}
            onClick={() => {
              if (password.length > 0) {
                setPassword("");
              }
            }}
          >
            AC
          </button>
          <button
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "0");
              }
            }}
          >
            0
          </button>
          <button
            className={`${isEmpty ? `` : `bg-red-500`}`}
            onClick={() => {
              if (password.length > 0) {
                setPassword(password.slice(0, -1));
              }
            }}
          >
            Del
          </button>
        </div>
        <div className="justify-center items-center flex">
          <button
            className={`${canSubmit ? `bg-emerald-700` : `bg-blue-500`}`}
            onClick={() => {
              SubmitHandler();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
