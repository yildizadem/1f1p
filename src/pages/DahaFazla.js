import React from 'react';
import tekderLogo from '../tekder-logo.png';
import mebLogo from '../meb-logo.jpg';

const style = {
    main: {
        width: "80%",
        margin: "20px auto"
    },
    partner: {
        whiteSpace: "nowrap",
        height: "200px",
        overflowX: "auto"
    },
    logo: {
        display: "inline-block",
        textAlign: "center"
    }
}

function DahaFazla() {
    return (
        <div style={style.main}>
            <h1>Program</h1>
            <ul>
                <li>Başvuru süreci: 01 Aralık 2019 - 27 Mart 2020</li>
                <li>Finale kalan takımların duyurulması: 17 Nisan 2020</li>
                <li>Finale kalan takımların proje sunum ve görsellerinin web sitesine yüklenmesi için son tarih 14 Mayıs 2020</li>
                <li>Final programı ve ödül töreni tarihi Tekder ve İstanbul Milli Eğitim Müdürlüğü tarafından daha sonra belirlenecektir.</li>
            </ul>
            <hr class="my-2" />
            <h1>Başvuru Koşulları</h1>
            <ul>
                <li>İstanbul ilindeki mesleki ve teknik liselerin 9., 10., 11. ve 12. sınıflarında okuyan tüm öğrenciler kayıtlı olduğu okulu belgelemek koşuluyla yarışmaya katılabilir.</li>
                <li>Bir projede en fazla 3 öğrenci yer alabilir.</li>
                <li>Her takımda bir danışman teknik öğretmen bulunabilir.</li>
                <li>Başvurular www.birfikirbirproje.org web sitesinde ilan edilen online form doldurularak yapılır.</li>
                <li>Daha önce başka bir yarışmada derece alıp ödüllendirilmiş bir proje bu yarışma kapsamında değerlendirmeye alınmaz.</li>
                <li>Finale kalan her bir proje için A1 ya da A2 boyutunda olacak şekilde poster hazırlanır.</li>
                <li>Finale kalan her bir projenin model ve/veya prototipi hazırlanmalıdır.</li>
                <li>Katılımcılar, dereceye giren ya da "yayınlanmaya değer bulunan" projenin TEKDER tarafından kullanılmasına süresiz olarak kullanım hakkını verdiğini peşinen kabul ettiğini ve buna bağlı olarak gerek “Fikir ve Sanat Eserleri Kanunu, gerekse diğer ilgili mevzuat gereğince yarışmaya gönderdiği eserinin çoğaltma, işlenme, yayma, temsil, umuma iletim, faydalanma ve bunun gibi umuma arzla ilgili bilumum telif haklarını TEKDER’e verdiğini kabul eder.</li>
                <li>Yayımlanan eserlere ayrıca telif ücreti ödenmez.</li>
            </ul>
            <hr class="my-2" />
            <h1>Ödüller</h1>
            <ul>
                <li>Birincilik ödülü: 6000₺</li>
                <li>İkincilik ödülü: 4000₺</li>
                <li>Üçüncülük ödülü 2000₺</li>
                <li>Finale kalan 10 takıma 1000₺</li>
            </ul>
            <hr class="my-2" />
            <h1>Partnerlerimiz</h1>
            <div style={style.partner}>
                <div style={style.logo}>
                    <img src={tekderLogo} height="100" alt="tekder-logo" />
                    <h6 class="my-2">Teknik Elemanlar Derneği</h6>
                    <h6>İstanbul İl Başkanlığı</h6>
                </div>
                <div class="mx-3" style={style.logo}>
                    <img src={mebLogo} height="100" alt="meb-logo" />
                    <h6 class="my-2">İstanbul</h6><h6>İl Milli Eğitim Müdürlüğü</h6>
                </div>
            </div>
            <hr class="my-2" />
            <h1>İletişim</h1>
            <ul>
                <li>Adres: Karagümrük Mahallesi TOKİ Konutları, muhtar Muhittin sokak, No: 14, C3-98 Blok, Daire: 3, Sulukule/Fatih/İstanbul</li>
                <li>Telefon: +90 212 532 0375</li>
                <li>Fax: +90 212 532 0375</li>
                <li>E-Posta: iletisim@tekderistanbul.org</li>
            </ul>
        </div>
    )
}

export default DahaFazla;