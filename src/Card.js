import React, { useEffect, useState } from "react";

const API_TOKEN =
  "7aca6d2e91e626046fb6950c40b3d4c20a4e1ee2f4317b218149afa51991a0abdef071371453de33384714ff3b4d0f9992ac26aeb2f90d6201a40f7ff9ee7c992ca262ec4fa847d6253cff1fe53d88f4e342b99f638b39d39d21ed118198416e95f309a0aad0048602b3dc2e867b3665620289d84ebf1765b384c7bb96b90031";

const Card = () => {
  const [avatar, setAvatar] = useState("");
  const [modal, setModal] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const handleGetAvatar = () => {
      fetch("https://admin.kiendev.click/api/upload/files/1", {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          Accept: "*/*",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setAvatar(res.url);
        })
        .catch((err) => {
          alert("lỗi lấy ảnh avatar của Xu từ server!");
        });
    };

    const handleGetThumbnail = () => {
      fetch("https://admin.kiendev.click/api/upload/files/2", {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          Accept: "*/*",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setThumbnail(res.url);
        })
        .catch((err) => {
          alert("lỗi lấy ảnh thumbnail của Xu từ server!");
        });
    };

    handleGetAvatar();
    handleGetThumbnail();
  }, []);

  return (
    <div className="birthdayCard group/card">
      <div className="cardFront relative">
        <h3 className="happy shadow-md font-bold ">HAPPY BIRTHDAY Xuân!</h3>
        <div className="flex justify-center items-center mt-20">
          <img
            alt="avatar-cua-xu"
            src={avatar !== "" ? `https://admin.kiendev.click/${avatar}` : ""}
            className="border-[16px] border-white rounded-lg shadow-xl group-hover/card:hidden"
          />
        </div>
        <div className="absolute bottom-0 flex justify-center transition-all duration-150 w-full group-hover/card:hidden text-xs px-4 pb-4">
          ghi chú: tớ đã dành 2 tiếng để code ra tấm thiệp này, hi vọng cậu
          thích nó :)) nếu cậu dùng điện thoại để xem thì hãy ấn lên tấm thiệp
          nhé
        </div>
      </div>
      <div className="cardInside relative bg-[url('../public/bg.webp')] bg-contain">
        {thumbnail !== "" && (
          <img
            alt=""
            src={`https://admin.kiendev.click/${thumbnail}`}
            className="border-[4px] border-white rounded-sm shadow-sm w-14 h-14 absolute top-20 rotate-12 right-16"
          />
        )}
        <h3 className="back font-semibold bg-white">Chúc mừng sinh nhật cậu</h3>
        <p>Chào cậu &#128513;,</p>
        <p className=" px-2 py-1 m-8">
          &#127881; Chúc mừng sinh nhật cậu &#127881;! Mong rằng ngày hôm nay
          của cậu sẽ tràn đầy niềm vui, hạnh phúc và những kỉ niệm đáng nhớ .
          Chúc cậu thêm tuổi mới tràn đầy sức khỏe &#128170;, thành công
          &#129309; và luôn đạt được những điều mà cậu mong ước &#128526;. Hy
          vọng mọi khó khăn sẽ tan biến và những điều tốt đẹp nhất sẽ đến với
          cậu. Sinh nhật vui vẻ nhé!
        </p>
        <div className="grid grid-cols-2">
          <div></div>
          <div className="text-center">
            <div>24-06-2024</div>
            <div>Kin Bùi</div>
          </div>
        </div>
        <div
          className="absolute cursor-pointer animate-bounce left-10"
          onClick={() => {
            alert(
              "Ừm... tớ muốn tặng một món quà nhỏ cho cậu nhưng vẫn chưa nghĩ ra nó nên là gì, gợi ý cho tớ nhé"
            );
          }}
        >
          &#127873;
        </div>
      </div>
    </div>
  );
};

export default Card;
