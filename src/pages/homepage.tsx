import { useEffect, useState } from "react";

export default function Homepage() {
  const [password, setPassword] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const thePassword = "20082024";

  useEffect(() => {
    setPassword("");

    if (password.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, []);

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
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "1");
              }
            }}
          >
            1
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "2");
              }
            }}
          >
            2
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "3");
              }
            }}
          >
            3
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "4");
              }
            }}
          >
            4
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "5");
              }
            }}
          >
            5
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "6");
              }
            }}
          >
            6
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "7");
              }
            }}
          >
            7
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "8");
              }
            }}
          >
            8
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "9");
              }
            }}
          >
            9
          </div>
          <div
            onClick={() => {
              if (password.length > 0) {
                setPassword("");
              }
            }}
          >
            AC
          </div>
          <div
            onClick={() => {
              if (password.length < 8) {
                setPassword(password + "0");
              }
            }}
          >
            0
          </div>
          <div
            onClick={() => {
              if (password.length > 0) {
                setPassword(password.slice(0, -1));
              }
            }}
          >
            Del
          </div>
        </div>
      </div>
    </>
  );
}
