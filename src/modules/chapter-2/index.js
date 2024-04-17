import react from "react";
import { MyFriend } from "./widgets/constantas/DataChat";
const myprofile = { id: "0419029203", name: "Febry" };

export function ChapterTwo() {
  return (
    <div id="chapter-2">
      <h1 className="text-white ml-5">
        chapter two: authentications and messagers
      </h1>
      <div className="px-3">
        <div className="row">
          <div className="col-2 col-lg-3 col-xxl-4 px-0">
            (daftar kontak disini)
            <div className="col-2 col-lg-3 col-xxl-4 px-0">
              {" "}
              {/* (Daftar kontak disini) */}{" "}
              {myprofile ? (
                <ContactUI my_account={myprofile} friends={MyFriend} />
              ) : (
                ""
              )}{" "}
            </div>
          </div>
          <div className="col-10 col-lg-9 col-xxl-8 px-0">
            (Messeging disini)
          </div>
        </div>
      </div>
    </div>
  );
}
