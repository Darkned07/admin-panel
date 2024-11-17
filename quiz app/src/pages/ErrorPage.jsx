import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  if (error.status == 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>
            404: Oops, This Page Got Lost in Cyberspace! 🌌 Salom, Internet
            sayohatchisi! Afsuski, siz izlayotgan sahifa boshqa galaktikaga
            ko'chib ketgan. Lekin vahima qilmang, sayohatimiz davom etadi! 🛸
            Shunchaki quyidagi variantlardan birini tanlang yoki bosh sahifaga
            qaytib, sarguzashtingizni davom ettiring:
          </h3>
          <Link to={"/"} className="btn">
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <div>
        <h3>
          Xatolik: Ushbu sahifani topib bo'lmadi! 🛠️ Hey, bu yerda biror narsa
          noto'g'ri ketdi. Biroq, qattiq tashvishlanmang! Biz ushbu muammoni
          tezda hal qilishga harakat qilamiz. Shu vaqt ichida, quyidagi
          havolalar orqali sayohatingizni davom ettirishingiz mumkin:
        </h3>
        <Link to={'/'} className="btn">
        bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
