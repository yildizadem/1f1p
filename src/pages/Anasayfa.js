import React from 'react';
import background from '../background.jpeg';
import {Link} from 'react-router-dom';

const style = {
    background: `url(${background}) no-repeat 50% fixed`,
    backgroundSize: "cover",
    objectFit: "cover",
    width: "100%",
    height: "calc(100vh - 73.88px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

function Anasayfa() {
    return (
        <div style={style}>
            <div className="giris-jumbotron">
                <h1>Mesleki ve Teknik Liselere Yönelik Proje Yarışması</h1>
                <h3>Bir Fikir Bir Proje</h3>
                <p>Teknolojinin, ülkelerin gelişmişlik düzeyleri üzerindeki etkisi kaçınılmaz bir gerçektir.
                    Hemen her ülke; teknolojik olarak kendini geliştirmenin hayat memat meselesi olduğunu,
                    bu alanda yaptığı çalışmalarıyla sergilemektedir. Ülkemiz de kendi yerli ve milli
                    imkânlarıyla teknolojik atılımını yapmaya mecbur olduğundan, Teknik Elemanlar Derneği
                    olarak ülkemizin teknolojik gelişimine katkıda bulunmak adına neler yapabilileceğimizi
                    düşündük. İlgili kurullarımızda bu konuyu masaya yatırarak proje yarışması düzenlemenin
                    getirilerini ve sağlayacağı katkının boyutlarını değerlendirerek elimizi taşın altına
                    koyduk. Böylece, hem gençlerimizin potansiyelini ortaya çıkarmak hem de gerekli çalışma
                    alanlarında teknolojiye yapacakları katkıyı göz önünde bulundurarak gerekli ortamı
                    sağladık ve “Bir Fikir, Bir Proje’’ isimli proje yarışmasını hayata geçirdik.</p>
                <hr className="my-2" />
                <div className="d-flex flex-wrap">
                    <Link to="/basvuru-yap">
                        <button type="button" className="btn btn-outline-danger Ripple-parent">Başvuru Yap</button>
                    </Link>
                    <Link to="/daha-fazla">
                        <button type="button" className="btn btn-outline-success Ripple-parent">Daha Fazla...</button>
                    </Link>
                </div>
                <hr className="my-2" />
                <div className="d-flex">
                    <a href="https://www.facebook.com/tekderistanbul/">
                        <i className="fab fa-facebook-square fa-2x white-text mx-2"></i>
                    </a>
                    <a href="https://twitter.com/tekderistanbul">
                        <i className="fab fa-twitter-square fa-2x white-text mx-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/tekder-istanbul-6178a2130">
                        <i className="fab fa-linkedin fa-2x white-text mx-2"></i>
                    </a>
                    <a href="https://www.instagram.com/tekderistanbul/">
                        <i className="fab fa-instagram fa-2x white-text mx-2"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Anasayfa;