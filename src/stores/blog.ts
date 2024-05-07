import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", () => {
  const blogs = ref([
    {
      id: 1,
      type: "Exhibitions and Events",
      video:
        "https://www.aparat.com/video/video/embed/videohash/zMOc3/vt/frame?t=20",
      category: "Exhibitions and Events",
      text_en: "Electrogen’s Presence at The Home Appliance Exhibition",
      text_ru: "Присутствие Electrogen на выставке бытовой техники",
      text_uz: "Maishiy texnika ko'rgazmasida elektrogenning mavjudligi",
      data: "2024.03.09",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/05-1.jpg",
      subtext_en: "",
      subtext_ru: "",
      subtext_uz: "",
    },

    {
      id: 3,
      video:
        "https://www.aparat.com/video/video/embed/videohash/dEyF0/vt/frame?t=1",
      type: "Technical Articles",
      category: "Exhibitions and Events",
      text_en: "Electrogen’s Presence at the International Industry Exhibition",
      text_ru: "Присутствие Electrogen на Международной отраслевой выставке",
      text_uz: "Xalqaro sanoat ko'rgazmasida elektrogenning mavjudligi",
      data: "2024.03.09",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/02-1.jpg",
      subtext_en: "",
      subtext_ru: "",
      subtext_uz: "",
    },
    {
      id: 2,
      type: "Exhibitions and Events",
      category: "Technical Articles",
      text_en: "BLDC Electromotors",
      text_ru: "Электродвигатели BLDC",
      text_uz: "BLDC elektromotorlari",
      data: "2024.03.09",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/08.jpg",
      subtext_en:
        "Introduction    With the advancement of technology and the increase of electrical equipment as well ...",
      subtext_ru:
        "Введение С развитием технологий и увеличением количества электрооборудования, а также...",
      subtext_uz:
        "Kirish Texnologiyaning rivojlanishi va elektr jihozlarining ko'payishi bilan birga ...",
      content_en: `
            <b>Introduction</b> <br> <br>
            With the advancement of technology and the increase of electrical equipment as well as population growth in the last few decades, energy consumption has increased significantly, especially in the domestic sector. According to the energy balance sheet published by the Ministry of Energy, the consumption share of the household sector in 1400 is 32.2% of the country’s total consumption, which has increased by 7.5% in just one year compared to 2019.
            <br>
            <br>
            About 65% of the electricity consumed in the domestic and industrial sectors belongs to electric motors, and increasing the efficiency and saving the electricity consumption of these types of equipment can have a significant impact on reducing the country’s electricity consumption. So the potential of reducing consumption and economic savings of electric motors used in European Union industries is estimated at 29% and in the United States at about 23%.
            <br>
            <br>
            Electric motors used in the household sector are mainly single-phase induction types with very low efficiency, less than 50%. A large number of these motors cause significant energy losses in the home sector. Therefore, replacing low-efficiency engines with new high-efficiency engines is one of the ways to reduce energy consumption in this sector. On the other hand, in Iran, due to climate changes the increase in air temperature, and the widespread use of cooling and air conditioning equipment in the summer, the peak electricity consumption has been shifted to this season of the year, which has led to problems in the field of providing the required power. During the hot days of the year and as a result of the forced reduction of consumption and blackouts of several hours by the regional electricity companies, the country has become a region that has led to customer dissatisfaction and damages to the production and industrial sectors.
            <br>
            <br>
            According to the analytical report of the water and energy field technology development headquarters, a major part of the power distribution network capacity in peak bar is dedicated to cooling equipment and devices, which has a share of about 35% of the summer peak bar consumption. According to the stated contents, to solve the network peak problem in summer, the most important solution is cooling peaking, with priority in the domestic sector. If it is possible to reduce only ten percent of the electricity consumption in this sector, there will be no need to increase the network capacity to compensate for the lack of electricity supply.
            <br>
            <br>
            Considering the hot and dry climate of Iran, one of the most numerous and most consumed motors is the electric motor used in the water cooler. According to official statistics, about 17 million water cooler engines are active in the country, increasing efficiency and reducing energy consumption in these engines can lead to a 30-50% reduction in electricity consumption and thus freeing up a large part of the country’s power grid capacity in the summer season.
            <br>
            <br>
            According to the stated statistics and materials, and as a result of the need to increase the efficiency in the country’s electricity consumption system, Electrogen Company, as the largest producer of cooling electric motors in the country, has also taken steps towards realizing this goal and since about 7 years ago, a study And it has started its research on the design and production of high-efficiency BLDC motors as well as high-efficiency induction motors with energy grade A to replace the usual cooler electric motors.
            <br>
            <br>
            <b>2- Introduction of BLDC motors</b> 
            <br>
            <br>
            The theory of reduction machines is mentioned below. The new principles of modern single-phase electric induction motors were formed after Faraday discovered the phenomenon of electromagnetic induction in 1831, and the first DC motor was built in the 1840s. However, due to the limitation and lack of development of power electronic devices and permanent magnet materials, the successful design of the BLDC motor took place more than a century later. Harrison[1] and Ray[2] filed the first patent for a thyristor commutator circuit to replace mechanical commutator equipment in 1955, which was precisely the most primitive BLDC motor.
            <br>
            <br>
            To create an alternating electromagnetic force and feed the stator conductors, it was necessary to generate the necessary signal to drive the corresponding thyristor. When the engine stopped, no current passed through the conductors and there was no starting torque. As a result, researchers introduced different commutators, and finally, after many tests, a brushless motor with electronic commutation using Hall effect sensors[3] was developed in 1962.
            <br>
            <br>
            In general, brushless permanent magnet motors, or in the term BLDC, are a type of magnet and synchronous motors that use permanent magnets in their rotor structure, and their difference from other types of synchronous magnet motors, i.e. PMSM, is in the way these motors are controlled. Today, permanent magnet motors have been widely used in various industries such as the automotive, aerospace, and home equipment industries due to their advantages such as high efficiency, long life, low noise, and favorable torque-speed characteristics.
            <br>
            <br>
            BLDC motor   is one of the electric motors that can replace single-phase induction motors in the common water cooler system. These motors are developed based on DC motors, and in the ideal case, the waveform of the stator current is in the form of 6 bridges and a square, similar to the DC machine. with the difference that electronic commutation has replaced the usual mechanical commutation.
            <br>
            <br>
            In a commutator DC motor, polarity reversal is done by the brushes. While in a BLDC motor, the mechanical brushes are removed and the commutation is done by a power electronics switching circuit using the angular position of the rotor.
            <br>
            <br>
            <b>3- BLDC motor structure</b> 
            <br>
            <br>
            In its simplest form, a permanent magnet motor consists of a magnet that acts as a rotor. The stator of these motors is mostly wound in three phases. These coils are balanced and distributed in the stator with a location of 120 inserts relative to each other; so that each phase is energized sequentially. When the stator windings are fed from the power source, they become electromagnets and begin to coil They make a uniform field in the air distance. Although the power source is DC, the switching operation creates an AC voltage with a trapezoidal waveform. In a commutator DC motor, the current polarity is reversed by the brushes. While in a BLDC motor, the mechanical brushes are removed and the commutation is done by an electronic power switching circuit using the angular position of the rotor.
            <br>
            <br>
            In BLDC motors, current passes through two-phase coils at any moment. The current flowing in each coil produces a magnetic field vector. By changing the coils according to Hall effect sensor signals and rotor position, the corresponding coil is activated as N and S poles. The structure of the rotor itself has permanent magnets and the N and S poles of the stator follow and cause the rotor to rotate.
            <br>
            <br>
            In general, the torque in the BLDC motor is produced by the reaction of the magnetic field generated by the stator and the magnetic field of the rotor magnet. By controlling the current that flows in the three coils, a magnetic field can be produced in a specific direction and size by the stator, and as a result, the produced torque can be controlled. In general, the characteristics of the motor depend on the winding of the stator and the arrangement of the magnets in the rotor, and according to the combination of the number of poles and grooves, the induced voltage in each phase of the stator may have different harmonics and, as a result, different waveforms. Permanent magnet motors are divided into two types of motors with sinusoidal induction voltage and trapezoidal induction voltage based on the induced voltage waveform that goes back to the design.
            <br>
            <br>
            4- Advantages and disadvantages of BLDC motors
            <br>
            <br>
            BLDC motors, like any other product, have various advantages and disadvantages, among which the following can be mentioned:
            <br>
            <br>
            High efficiency: among existing motors, BLDC motors have relatively high efficiency. The higher efficiency of this motor is mainly due to the existence of a permanent magnetic field in the rotor, which is a continuous and constant field and, unlike induction motors, does not cause copper loss in the rotor. Also, the removal of sweepers and gearboxes reduces friction and mechanical losses and thus increases efficiency.
            <br>
            <br>
            No need for a gearbox: in BLDC motors, the torque of the machine is constant and maximum efficiency can be obtained in the design speed range, so there is no need for a gearbox.
            <br>
            <br>           
            Low noise: due to not needing any mechanical brush or slip ring in BLDC motors, all mechanical noises are eliminated except the noises related to bearings, couplings and load.
            <br>
            <br>  
            Less maintenance, longer reliability, and life: Mechanical brushes and slip rings are common sources of failure and uncertainty in DC motors. By removing these components in BLDC motors, the life of the motor depends on the life of insulation, bearings, and the life of magnetic materials, which will have a long life under suitable working conditions. Also, the gearbox is subject to wear and tear is a source of uncertainty, and requires maintenance. Removing it increases reliability.
            Higher torque density: there is no field winding in BLDC motors, and therefore the necessary space for it is saved and reduces the overall size of the motor.
            <br>
            <br> 
            The following can be mentioned among their disadvantages:
            <br>
            <br>
            The price of magnetic materials: the price of permanent magnet materials with higher energy density prevents their use in applications where the price and cost of using these materials is greater than the aforementioned benefits. For example, ceramic magnets, which have the lowest price among magnet materials, also have the lowest energy density. Neodymium magnets have the highest energy density and the price is about 3 times the price of ceramic magnets. Samarium-cobalt magnet materials have an acceptable energy density, but due to the higher working temperature, they are about 9 times more expensive than ceramic magnets.
            <br>
            <br>
            Possibility of demagnetization: the maximum power of the BLDC motor is limited by heat. Too much heat reduces the flux density of magnets and may even cause them to be demagnetized.
            <br>
            <br>
            [1] Harrison
            <br>  
            [2] Rye
            <br>
            [3] Hall Effect Sensor
            `,
      content_ru: `
      <b>Введение</b> <br> <br>
      С развитием технологий и увеличением количества электрооборудования, а также с ростом населения за последние несколько десятилетий значительно возросло потребление энергии, особенно в бытовом секторе. Согласно энергетическому балансу, опубликованному Министерством энергетики, доля потребления домашних хозяйств в 1400 странах составляет 32,2% от общего объема потребления в стране, что всего за один год увеличилось на 7,5% по сравнению с 2019 годом.
      <br>
      <br>
      Около 65% электроэнергии, потребляемой в быту и промышленности, приходится на электродвигатели, и повышение эффективности и экономия электроэнергии, потребляемой этими типами оборудования, могут оказать существенное влияние на сокращение потребления электроэнергии в стране. Таким образом, потенциал снижения потребления и экономической экономии электродвигателей, используемых в промышленности Европейского союза, оценивается в 29%, а в Соединенных Штатах - примерно в 23%.
      <br>
      <br>
      В быту используются в основном однофазные индукционные электродвигатели с очень низким КПД, менее 50%. Большое количество таких двигателей приводит к значительным потерям электроэнергии в быту. Поэтому замена низкоэффективных двигателей новыми высокоэффективными двигателями является одним из способов снижения энергопотребления в этом секторе. С другой стороны, в Иране из-за изменения климата, повышения температуры воздуха и широкого использования оборудования для охлаждения и кондиционирования воздуха летом, пик потребления электроэнергии был перенесен на это время года, что привело к проблемам в области обеспечения необходимой мощностью. В жаркие дни года, в результате вынужденного сокращения потребления и многочасовых отключений электроэнергии региональными энергетическими компаниями, страна превратилась в регион, который вызывает недовольство потребителей и наносит ущерб производственному сектору.
      <br>
      <br>
      Согласно аналитическому отчету штаба по развитию технологий в области водоснабжения и энергетики, основная часть мощностей сети распределения электроэнергии в пик-баре приходится на холодильное оборудование и приборы, на долю которых приходится около 35% потребления в летний период в пик-баре. Согласно заявленному содержанию, для решения проблемы пиковой нагрузки на сеть в летний период наиболее важным решением является повышение температуры воздуха, причем приоритет отдается бытовому сектору. Если удастся сократить потребление электроэнергии в этом секторе всего на десять процентов, то не возникнет необходимости увеличивать пропускную способность сети, чтобы компенсировать недостаток электроснабжения.
      <br>
      <br>
      Учитывая жаркий и сухой климат Ирана, одним из самых многочисленных и наиболее потребляемых двигателей является электродвигатель, используемый в охладителе воды. Согласно официальной статистике, в стране работает около 17 миллионов двигателей с водяным охлаждением, повышение эффективности и снижение энергопотребления этих двигателей могут привести к сокращению потребления электроэнергии на 30-50% и, таким образом, к высвобождению значительной части мощностей электросетей страны в летний сезон.
      <br>
      <br>
      Согласно приведенным статистическим данным и материалам, а также в связи с необходимостью повышения эффективности системы потребления электроэнергии в стране, компания Electrogen, как крупнейший производитель охлаждающих электродвигателей в стране, также предприняла шаги для достижения этой цели, и около 7 лет назад были проведены исследования и компания приступила к исследованиям по разработке и производству высокоэффективных электродвигателей постоянного тока, а также высокоэффективных асинхронных двигателей с классом энергопотребления А для замены обычных электродвигателей с охлаждением.
      <br>
      <br>
      <b>2- Внедрение двигателей постоянного тока</b> 
      <br>
      <br>
      Теория редукторных машин приведена ниже. Новые принципы работы современных однофазных асинхронных электродвигателей были сформулированы после того, как Фарадей открыл явление электромагнитной индукции в 1831 году, а первый двигатель постоянного тока был сконструирован в 1840-х годах. Однако из-за ограниченности и недостаточного развития силовых электронных устройств и материалов с постоянными магнитами успешная разработка двигателя постоянного тока была осуществлена более чем столетие спустя. Харрисон[1] и Рэй[2] подали первый патент на тиристорную коммутационную схему для замены механического коммутационного оборудования в 1955 году, которая представляла собой самый примитивный двигатель постоянного тока.
      <br>
      <br>
      Чтобы создать переменную электромагнитную силу и питать провода статора, необходимо было сгенерировать необходимый сигнал для приведения в действие соответствующего тиристора. При остановке двигателя ток по проводам не проходил и пусковой момент отсутствовал. В результате исследователи представили различные коммутаторы, и, наконец, после многочисленных испытаний в 1962 году был разработан бесщеточный двигатель с электронной коммутацией с использованием датчиков на эффекте Холла[3].
      <br>
      <br>
      В общем, бесщеточные двигатели с постоянными магнитами, или, как их еще называют, BLDC, представляют собой тип магнитных и синхронных двигателей, в конструкции ротора которых используются постоянные магниты, и их отличие от других типов синхронных магнитных двигателей, т.е. PMSM, заключается в способе управления этими двигателями. Сегодня двигатели с постоянными магнитами широко используются в различных отраслях промышленности, таких как автомобилестроение, аэрокосмическая промышленность и производство бытовой техники, благодаря таким их преимуществам, как высокая эффективность, длительный срок службы, низкий уровень шума и благоприятные характеристики соотношения крутящего момента и скорости.
      <br>
      <br>
      Двигатель постоянного тока - это один из электродвигателей, который может заменить однофазные асинхронные двигатели в обычной системе охлаждения воды. Эти двигатели разработаны на основе двигателей постоянного тока, и в идеальном случае форма волны тока статора имеет форму 6 мостов и квадрата, аналогичную машине постоянного тока. с той разницей, что электронная коммутация заменила обычную механическую коммутацию.
      <br>
      <br>
      В коллекторном двигателе постоянного тока смена полярности осуществляется с помощью щеток. В то время как в двигателе постоянного тока механические щетки снимаются, и коммутация осуществляется с помощью схемы переключения силовой электроники, использующей угловое положение ротора.
      <br>
      <br>
      <b>Конструкция двигателя постоянного тока с 3-мя блоками</b> 
      <br>
      <br>
      В своей простейшей форме двигатель с постоянными магнитами состоит из магнита, который действует как ротор. Статор этих двигателей в основном вращается в три фазы. Эти катушки сбалансированы и распределены в статоре с расположением 120 вставок относительно друг друга, так что каждая фаза питается последовательно. Когда обмотки статора питаются от источника питания, они превращаются в электромагниты и начинают скручиваться, создавая однородное поле в воздухе. Хотя источником питания является постоянный ток, при переключении создается переменное напряжение трапециевидной формы. В коллекторном двигателе постоянного тока полярность тока меняется на противоположную с помощью щеток. В то время как в двигателе постоянного тока механические щетки снимаются, и коммутация осуществляется электронной схемой переключения мощности с использованием углового положения ротора.
      <br>
      <br>
      В двигателях постоянного тока ток проходит через двухфазные катушки в любой момент времени. Ток, протекающий в каждой катушке, создает вектор магнитного поля. При изменении катушек в соответствии с сигналами датчика эффекта Холла и положением ротора, соответствующая катушка активируется в качестве N и S полюсов. В конструкции самого ротора предусмотрены постоянные магниты, а полюса N и S статора следуют за ними и заставляют ротор вращаться.
      <br>
      <br>
      Как правило, крутящий момент в двигателе постоянного тока создается за счет взаимодействия магнитного поля, создаваемого статором, и магнитного поля магнита ротора. Управляя током, протекающим в трех катушках, статор может создавать магнитное поле определенного направления и величины, и, как следствие, можно регулировать создаваемый крутящий момент. В общем, характеристики двигателя зависят от обмотки статора и расположения магнитов в роторе, и в зависимости от комбинации количества полюсов и пазов индуцированное напряжение в каждой фазе статора может иметь разные гармоники и, как следствие, разную форму волны. Двигатели с постоянными магнитами делятся на два типа: с синусоидальным индуктивным напряжением и трапециевидным индуктивным напряжением в зависимости от формы индуцированного напряжения, которая восходит к конструкции.
      <br>
      <br>
      4. Преимущества и недостатки электродвигателей постоянного тока
      <br>
      <br>
      Электродвигатели постоянного тока, как и любой другой продукт, имеют различные преимущества и недостатки, среди которых можно отметить следующие:
      <br>
      <br>
      Высокий КПД: среди существующих двигателей двигатели постоянного тока обладают относительно высоким КПД. Более высокий КПД этого двигателя в основном обусловлен наличием постоянного магнитного поля в роторе, которое является непрерывным и неизменным и, в отличие от асинхронных двигателей, не вызывает потерь меди в роторе. Кроме того, снятие уборочных машин и коробок передач снижает трение и механические потери и, таким образом, повышает эффективность.
      <br>
      <br>
      Нет необходимости в коробке передач: в двигателях постоянного тока крутящий момент машины постоянен, и максимальная эффективность может быть достигнута в расчетном диапазоне скоростей, поэтому в коробке передач нет необходимости.
      <br>
      <br>
Низкий уровень шума: благодаря отсутствию необходимости в механической щетке или контактном кольце в двигателях постоянного тока, устраняются все механические шумы, за исключением шумов, связанных с подшипниками, муфтами и нагрузкой.
      <br>
      <br>  `,

      content_uz: `
      <b>Kirish </b> <br> <br>
      So'nggi bir necha o'n yilliklarda texnologiyaning rivojlanishi va elektr jihozlarining ko'payishi hamda aholi sonining ko'payishi bilan energiya iste'moli, ayniqsa, ichki sektorda sezilarli darajada oshdi. Energetika vazirligi tomonidan nashr etilgan energiya balansiga ko'ra, 1400 yilda maishiy sektorning iste'mol ulushi mamlakat umumiy iste'molining 32,2 foizini tashkil etadi, bu 7,5 yilga nisbatan atigi bir yil ichida 2019 foizga oshdi.
      <br>
      <br>
      Maishiy va sanoat tarmoqlarida iste'mol qilinadigan elektr energiyasining taxminan 65% elektr motorlariga tegishli bo'lib, ushbu turdagi uskunalarning samaradorligini oshirish va elektr energiyasini tejash mamlakatning elektr energiyasini iste'mol qilishni kamaytirishga sezilarli ta'sir ko'rsatishi mumkin. Shunday qilib, Evropa Ittifoqi sanoatida ishlatiladigan elektr motorlarining iste'molini kamaytirish va iqtisodiy tejash salohiyati 29% va AQShda taxminan 23% ga baholanmoqda.
      <br>
      <br>
      Maishiy sektorda ishlatiladigan elektr motorlar asosan bir fazali induksiya turlari bo'lib, samaradorligi juda past, 50% dan kam. Ushbu motorlarning katta qismi uy sektorida sezilarli energiya yo'qotishlariga olib keladi. Shu sababli, past samarali dvigatellarni yangi yuqori samarali dvigatellar bilan almashtirish ushbu sohada energiya sarfini kamaytirish usullaridan biridir. Boshqa tomondan, Eronda iqlim o'zgarishi tufayli havo haroratining ko'tarilishi va yozda sovutish va konditsioner uskunalaridan keng foydalanish, elektr energiyasining eng yuqori iste'moli yilning ushbu mavsumiga o'tkazildi, bu esa olib keldi.kerakli quvvatni ta'minlash sohasidagi muammolar. Yilning issiq kunlarida va mintaqaviy elektr kompaniyalari tomonidan iste'molni majburiy ravishda qisqartirish va bir necha soatlik uzilishlar natijasida mamlakat mijozlarning noroziligiga va ishlab chiqarish va sanoat tarmoqlariga zarar etkazilishiga olib kelgan mintaqaga aylandi.
      <br>
      <br>
      Suv va energetika sohasidagi texnologiyalarni rivojlantirish bo'yicha shtab-kvartiraning tahliliy hisobotiga ko'ra, peak bar-dagi elektr energiyasini taqsimlash tarmog'ining asosiy qismi sovutish uskunalari va qurilmalariga bag'ishlangan bo'lib, ular yozgi pik bar iste'molining taxminan 35% ulushiga ega. Belgilangan tarkibga ko'ra, yozda tarmoqning eng yuqori muammosini hal qilish uchun eng muhim echim-bu ichki sektorda ustuvorlik bilan sovutish cho'qqisi. Agar ushbu sektorda elektr energiyasini iste'mol qilishning atigi o'n foizini kamaytirish mumkin bo'lsa, elektr ta'minotining etishmasligini qoplash uchun tarmoq quvvatini oshirishga hojat qolmaydi.
      <br>
      <br>
      Eronning issiq va quruq iqlimini hisobga olgan holda, eng ko'p va eng ko'p iste'mol qilinadigan dvigatellardan biri bu suv sovutgichida ishlatiladigan elektr motoridir. Rasmiy statistik ma'lumotlarga ko'ra, mamlakatda 17 millionga yaqin suv sovutgichli dvigatellar faol ishlaydi, bu dvigatellarda samaradorlikni oshirish va energiya sarfini kamaytirish elektr energiyasini iste'mol qilishni 30-50 foizga kamaytirishga olib kelishi va shu bilan mamlakat elektr tarmog'ining katta qismini bo'shatishi mumkin.yozgi mavsumda quvvat.
      <br>
      <br>
      Ko'rsatilgan statistik ma'lumotlar va materiallarga ko'ra va mamlakatning elektr energiyasini iste'mol qilish tizimidagi samaradorlikni oshirish zarurati natijasida Electrogen kompaniyasi mamlakatdagi eng yirik sovutish elektr motorlarini ishlab chiqaruvchisi sifatida ham ushbu maqsadni amalga oshirish uchun qadamlar qo'ydi va taxminan 7 yil oldin tadqiqot va u odatdagi sovutgichli elektr motorlarini almashtirish uchun yuqori samarali BLDC motorlarini, shuningdek, a energiya darajasiga ega yuqori samarali induksion motorlarni loyihalash va ishlab chiqarish bo'yicha tadqiqotlarni boshladi.
      <br>
      <br>
      < b>2 - BLDC motors joriy etish</b> 
      <br>
      <br>
      Kamaytirish mashinalari nazariyasi quyida keltirilgan. Zamonaviy bir fazali elektr induksion dvigatellarning yangi tamoyillari Faraday 1831 yilda elektromagnit induksiya hodisasini kashf etganidan keyin shakllandi va birinchi doimiy dvigatel 1840-yillarda qurilgan. biroq, quvvatli elektron qurilmalar va doimiy magnit materiallarning cheklanganligi va rivojlanmaganligi sababli, BLDC ning muvaffaqiyatli dizayni motor bir asrdan keyin sodir bo'ldi. Harrison [1] va Rey[2] 1955 yilda mexanik kommutator uskunalarini almashtirish uchun tiristorli kommutator sxemasi uchun birinchi patentni topshirdi, bu aniq eng ibtidoiy BLDC dvigateli edi.
      <br>
      <br>
      O'zgaruvchan elektromagnit kuchni yaratish va stator o'tkazgichlarini oziqlantirish uchun tegishli Tiristorni haydash uchun kerakli signalni yaratish kerak edi. Dvigatel to'xtaganda, o'tkazgichlardan oqim o'tmadi va boshlang'ich moment yo'q edi. Natijada, tadqiqotchilar turli xil kommutatorlarni joriy qilishdi va nihoyat, ko'plab sinovlardan so'ng, Hall effektli sensorlar yordamida elektron kommutatsiyaga ega cho'tkasiz dvigatel[3] 1962 yilda ishlab chiqilgan.
      <br>
      <br>
      Umuman olganda, cho'tkasiz doimiy magnit motorlar yoki BLDC atamasida rotor tuzilishida doimiy magnitlardan foydalanadigan magnit va sinxron motorlarning bir turi va ularning boshqa turdagi sinxron magnit motorlardan farqi, ya'ni PMSM, bu motorlarni boshqarish usulida. Bugungi kunda doimiy magnit motorlar yuqori samaradorlik, uzoq umr, past shovqin va qulay moment tezligi xususiyatlari kabi afzalliklari tufayli avtomobilsozlik, aerokosmik va uy jihozlari sanoati kabi turli sohalarda keng qo'llanilmoqda.
      <br>
      <br>
      BLDC motor-bu umumiy suv sovutish tizimidagi bir fazali asenkron motorlarni almashtira oladigan elektr motorlaridan biridir. Ushbu motorlar DC motorlari asosida ishlab chiqilgan va ideal holatda stator oqimining to'lqin shakli DC mashinasiga o'xshash 6 ko'prik va kvadrat shaklida. farqi bilan elektron kommutatsiya odatdagi mexanik kommutatsiyani almashtirdi.
      <br>
      <br>
      Kommutator DC motorida polaritni qaytarish cho'tkalar tomonidan amalga oshiriladi. BLDC dvigatelida mexanik cho'tkalar olib tashlanadi va kommutatsiya rotorning burchak holatidan foydalangan holda elektr elektronikasini almashtirish davri orqali amalga oshiriladi.
      <br>
      <br>
      <b>3-BLDC motor tuzilishi< / b> 
      <br>
      <br>
      Oddiy shaklda doimiy magnit motor rotor vazifasini bajaradigan magnitdan iborat. Ushbu motorlarning statori asosan uch bosqichda o'raladi. Bu halqalari muvozanatli va bir joyga bilan stator taqsimlanadi 120 bir-biriga nisbatan qo'shimchalar; har bir bosqich izchil energiya, shunday qilib,. Stator sargilari quvvat manbaidan oziqlanganda, ular elektromagnitlarga aylanadi va aylana boshlaydi, ular havo masofasida bir xil maydon hosil qiladi. Quvvat manbai DC bo'lsa-da, kommutatsiya operatsiyasi trapezoidal to'lqin shakli bilan AC kuchlanishini yaratadi. Kommutator DC motorida joriy kutupluluk cho'tkalar tomonidan teskari yo'naltiriladi. BLDC dvigatelida mexanik cho'tkalar olib tashlanadi va kommutatsiya rotorning burchak holatidan foydalangan holda elektron quvvatni almashtirish davri tomonidan amalga oshiriladi.
      <br>
      <br>
      BLDC motorlarida oqim har qanday vaqtda ikki fazali sariqlardan o'tadi. Har bir spiralda oqayotgan oqim magnit maydon vektorini hosil qiladi. Bobinlarni Hall effect sensori signallari va rotor holatiga qarab o'zgartirib, mos keladigan lasan N va S qutblari sifatida faollashadi. Rotorning tuzilishi doimiy magnitlarga ega va statorning N va S qutblari rotorni kuzatib boradi va aylanishiga olib keladi.
      <br>
      <br>
      Umuman olganda, BLDC dvigatelidagi moment stator tomonidan hosil qilingan magnit maydonning reaktsiyasi va rotor magnitining magnit maydoni tomonidan ishlab chiqariladi. Uchta rulonda oqadigan oqimni boshqarish orqali stator tomonidan ma'lum bir yo'nalish va o'lchamda magnit maydon hosil bo'lishi mumkin va natijada ishlab chiqarilgan momentni boshqarish mumkin. Umuman olganda, motorning xususiyatlari statorning o'rashiga va rotordagi magnitlarning joylashishiga bog'liq va qutblar va oluklar sonining kombinatsiyasiga ko'ra, statorning har bir bosqichida induktsiya qilingan kuchlanish turli xil harmonikalarga ega bo'lishi mumkin va natijada turli xil to'lqin shakllari. Doimiy magnit motorlar dizaynga qaytadigan induktsiyalangan kuchlanish to'lqin shakliga asoslangan sinusoidal induksion kuchlanish va trapezoidal induksion kuchlanishli ikki turdagi motorlarga bo'linadi.
      <br>
      <br>
      4-BLDC motorlarining afzalliklari va kamchiliklari
      <br>
      <br>
      BLDC motorlari, boshqa har qanday mahsulot singari, turli xil afzallik va kamchiliklarga ega, ular orasida quyidagilarni aytib o'tish mumkin:
      <br>
      <br>
      Yuqori samaradorlik: mavjud motorlar orasida BLDC motorlari nisbatan yuqori samaradorlikka ega. Ushbu dvigatelning yuqori samaradorligi, asosan, rotorda doimiy va doimiy maydon bo'lgan va induksion dvigatellardan farqli o'laroq, rotorda mis yo'qotilishiga olib kelmaydigan doimiy magnit maydon mavjudligi bilan bog'liq. Shuningdek, supurgi va Vites qutilarini olib tashlash ishqalanish va mexanik yo'qotishlarni kamaytiradi va shu bilan samaradorlikni oshiradi.
      <br>
      <br>
      Vites qutisiga ehtiyoj yo'q: BLDC motorlarida mashinaning momenti doimiy va dizayn tezligi oralig'ida maksimal samaradorlikni olish mumkin, shuning uchun Vites qutisiga ehtiyoj yo'q.
      <br>
      <br>           
      Kam shovqin: BLDC motorlarida hech qanday mexanik cho'tka yoki toymasin halqaga muhtoj emasligi sababli, rulmanlar, muftalar va yuk bilan bog'liq shovqinlardan tashqari barcha mexanik shovqinlar yo'q qilinadi.
      <br>
      <br>  
`
    },
    {
      id: 4,
      type: "Technical Articles",
      category: "Technical Articles",
      text_en: "How To Read The Electric Motor and Electric Pump Nameplate?",
      text_ru:
        "Как читать паспортную табличку электродвигателя и электронасоса?",
      text_uz:
        "Elektr dvigateli va elektr nasosining nomini qanday o'qish mumkin?",
      data: "2024.03.09",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/07-1.jpg",
      subtext_en:
        "Reading the electric motor plate is known as the fastest way to understand the ...",
      subtext_ru:
        "Чтение таблички электродвигателя известно как самый быстрый способ понять ...",
      subtext_uz:
        "Elektr dvigatel plitasini o'qish, tushunishning eng tezkor usuli sifatida tanilgan ...",
      content_en: `
        Reading the electric motor plate is known as the fastest way to understand the technical information of the electric motor and to understand its structure and functional characteristics. This skill will help to identify possible faults as well as ensure that the engine is suitable for a specific application. For this reason, in this guide, we provide a complete description of the signs on the engine license plate:
        <br>
        Manufacturer and model company
        <br>
        The first item that appears on the license plate is the name of the manufacturer of the electric motor. This name, which is usually located on the top of the license plate, helps you to contact the manufacturer and benefit from support services or the provision of spare parts. The product model, serial number, and production date of the electric motor are other information that can help you in the process of using the product. Some manufacturers of electric motors have defined a specific code for their products, this code contains useful technical information about the product, and information such as the number of phases, voltage, protection class, etc. is inserted
        <br>
        Type of nutrition
        <br>
        An important parameter that can be seen on the electric motor nameplate is whether it is alternating current (AC) or direct current (DC). This issue is important because electric motors can be driven by DC power sources such as batteries or rectifiers or by AC power sources such as the grid, and inverters. If this parameter is not written on the plate, it can be recognized from the voltage value or the presence of the frequency parameter. In AC motors, the number of phases is also a parameter that plays an important role in how to connect to the power supply. It is necessary to write the numbers 1 and 3 in this part to indicate single-phase and three-phase motors.
        <br>
        Nominal values
        <br>
        The rated values of the electric motor are parameters such as frequency, power, voltage, current, speed, and power factor that the motor works at its rated load in these values. These values are recorded on the license plate and the consumer chooses the desired engine for a specific application based on them. The consumer chooses a motor that is suitable for his application, taking into account the power and speed he needs (which leads to the calculation of the torque) at a specific voltage and frequency. The correct selection of these values helps the engine to work continuously at its rated power without increasing the temperature, and to prevent the reduction of efficiency and engine failure.
        <br><br>
        Dependent parameters
        <br>Other parameters are recorded on the nameplate of the electric motors, which have the same importance as the nominal values, but usually less attention is paid to them. These items include parameters such as insulation class, degree of protection, type of operation, energy category, temperature, and height of the working environment of the motor. A change in any of these parameters indicates a change of electrical or mechanical origin in the engine. For example, by changing the efficiency category, it is possible to change the structure of the motor, including the length of the core, material of the core, winding, etc. Therefore, it is very important to include these items on the license plate.`,
        content_uz: `
        Elektr dvigatel plitasini o'qish elektr motorining texnik ma'lumotlarini tushunish va uning tuzilishi va funktsional xususiyatlarini tushunishning eng tezkor usuli sifatida tanilgan. Ushbu mahorat mumkin bo'lgan nosozliklarni aniqlashga yordam beradi, shuningdek dvigatelning ma'lum bir dastur uchun mos bo'lishini ta'minlaydi. Shu sababli, ushbu qo'llanmada biz dvigatel raqamidagi belgilarning to'liq tavsifini taqdim etamiz:
        <br>
        Ishlab chiqaruvchi va model kompaniyasi
        <br>
        Davlat raqamida paydo bo'ladigan birinchi element-bu elektr motorini ishlab chiqaruvchining nomi. Odatda davlat raqamining yuqori qismida joylashgan ushbu nom ishlab chiqaruvchi bilan bog'lanishga va qo'llab-quvvatlash xizmatlaridan yoki ehtiyot qismlarni taqdim etishdan foyda olishga yordam beradi. Elektr motorining mahsulot modeli, seriya raqami va ishlab chiqarilgan sanasi mahsulotdan foydalanish jarayonida sizga yordam beradigan boshqa ma'lumotlardir. Ba'zi elektr motorlarini ishlab chiqaruvchilar o'z mahsulotlari uchun ma'lum bir kodni aniqladilar, bu kod mahsulot haqida foydali texnik ma'lumotlarni va fazalar soni, kuchlanish, himoya klassi va boshqalar kabi ma'lumotlarni o'z ichiga oladi. kiritilgan
        <br>
        Oziqlanish turi
        <br>
        Elektr motor plitalari ustida ko'rish mumkin muhim parametr joriy muqobil yoki yo'qligini emas (AC) yoki to'g'ridan-to'g'ri joriy (DC). Bu masala juda muhim, chunki elektr motorlarini batareyalar yoki rektifikatorlar kabi doimiy quvvat manbalari yoki tarmoq va invertorlar kabi AC quvvat manbalari boshqarishi mumkin. Agar ushbu parametr plastinkada yozilmagan bo'lsa, uni kuchlanish qiymatidan yoki chastota parametrining mavjudligidan tanib olish mumkin. AC motorlarida fazalar soni ham elektr ta'minotiga qanday ulanishda muhim rol o'ynaydigan parametrdir. Bir fazali va uch fazali motorlarni ko'rsatish uchun ushbu qismda 1 va 3 raqamlarini yozish kerak.
        <br>
        Nominal qiymatlar
        <br>
        Elektr motorining nominal qiymatlari chastota, quvvat, kuchlanish, oqim, tezlik va quvvat omili kabi parametrlar bo'lib, vosita ushbu qiymatlarda nominal yukida ishlaydi. Ushbu qiymatlar davlat raqamiga yoziladi va iste'molchi ular asosida ma'lum bir dastur uchun kerakli dvigatelni tanlaydi. Iste'molchi o'ziga kerak bo'lgan quvvat va tezlikni (bu momentni hisoblashga olib keladi) ma'lum bir kuchlanish va chastotada hisobga olgan holda, uni qo'llash uchun mos bo'lgan motorni tanlaydi. Ushbu qiymatlarni to'g'ri tanlash dvigatelning haroratni oshirmasdan nominal quvvatida doimiy ishlashiga va samaradorlikni pasayishiga va dvigatelning ishdan chiqishiga yo'l qo'ymaslikka yordam beradi.
        <br> <br>
        Bog'liq parametrlar
        elektr motorlarining nom yorlig'ida nominal qiymatlar bilan bir xil ahamiyatga ega bo'lgan boshqa parametrlar qayd etiladi, lekin odatda ularga kamroq e'tibor beriladi. Ushbu elementlarga izolyatsiya klassi, himoya darajasi, ishlash turi, energiya toifasi, harorat va dvigatelning ish muhitining balandligi kabi parametrlar kiradi. Ushbu parametrlarning har qandayidagi o'zgarish dvigatelda elektr yoki mexanik kelib chiqishi o'zgarishini ko'rsatadi. Masalan, samaradorlik toifasini o'zgartirish orqali dvigatelning tuzilishini, shu jumladan yadro uzunligini, yadro materialini, o'rashni va hokazolarni o'zgartirish mumkin. Shuning uchun, bu narsalarni davlat raqamiga kiritish juda muhimdir.`,
        content_ru: `Чтение таблички с названием электродвигателя, как известно, является самым быстрым способом разобраться в технической информации об электродвигателе, а также в его структуре и функциональных характеристиках. Этот навык поможет выявить возможные неисправности, а также убедиться в том, что двигатель подходит для конкретного применения. По этой причине в данном руководстве мы приводим полное описание знаков на номерном знаке двигателя:
        <br>
        Компания-производитель и модель
        <br>
        Первое, что появляется на номерном знаке, - это название производителя электродвигателя. Это название, которое обычно располагается в верхней части номерного знака, поможет вам связаться с производителем и воспользоваться услугами технической поддержки или поставкой запасных частей. Модель изделия, серийный номер и дата изготовления электродвигателя - это другая информация, которая может помочь вам в процессе использования изделия. Некоторые производители электродвигателей определили специальный код для своей продукции, этот код содержит полезную техническую информацию о продукте, а также такую информацию, как количество фаз, напряжение, класс защиты и т.д.
        <br>
        Тип питания
        <br>
        Важным параметром, который можно увидеть на паспортной табличке электродвигателя, является то, является ли это переменный ток (AC) или постоянный ток (DC). Этот вопрос важен, поскольку электродвигатели могут приводиться в действие от источников постоянного тока, таких как батареи или выпрямители, или от источников переменного тока, таких как электросеть и инверторы. Если этот параметр не указан на табличке, его можно распознать по значению напряжения или по наличию параметра частоты. В двигателях переменного тока количество фаз также является параметром, который играет важную роль при подключении к источнику питания. В этой части необходимо указать цифры 1 и 3 для обозначения однофазных и трехфазных двигателей.
        <br>
        Номинальные значения
        <br>
        Номинальные значения электродвигателя - это такие параметры, как частота, мощность, напряжение, ток, частота вращения и коэффициент мощности, при которых двигатель работает при номинальной нагрузке. Эти значения указаны на номерном знаке, и на их основе потребитель выбирает желаемый двигатель для конкретного применения. Потребитель выбирает двигатель, подходящий для его применения, с учетом необходимой ему мощности и частоты вращения (что приводит к расчету крутящего момента) при определенном напряжении и частоте вращения. Правильный выбор этих значений помогает двигателю непрерывно работать на номинальной мощности без повышения температуры и предотвращает снижение КПД и отказ двигателя.
        <br><br>
        Зависимые параметры
        На заводской табличке электродвигателей указаны и другие параметры, которые имеют такое же значение, как и номинальные значения, но обычно им уделяется меньше внимания. Эти параметры включают в себя такие параметры, как класс изоляции, степень защиты, тип эксплуатации, категория энергопотребления, температура и высота рабочей зоны двигателя. Изменение любого из этих параметров указывает на изменение электрической или механической природы двигателя. Например, изменив категорию эффективности, можно изменить конструкцию двигателя, в том числе длину сердечника, материал сердечника, обмотку и т.д. Поэтому очень важно указать эти параметры на номерном знаке.`
    },
    {
      id: 5,
      type: "Technical Articles",
      category: "Technical Articles",
      text_en: "Troubleshooting Techniques For Electric Motors and Pumps …",
      text_ru: "Методы устранения неисправностей электродвигателей и насосов…",
      text_uz:
        "Elektr dvigatellari va nasoslar uchun nosozliklarni bartaraf etish usullari ...",
      data: "2024.03.09",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/06-1.jpg",
      subtext_en:
        "Disruption in the operation of electric motors and electric pumps can be caused by ...",
      subtext_ru:
        "Нарушение работы электродвигателей и электронасосов может быть вызвано...",
      subtext_uz:
        "Elektr dvigatellari va elektr nasoslarning ishlashidagi uzilishlar sabab bo'lishi mumkin ...",
      content_en: `
        Disruption in the operation of electric motors and electric pumps can be caused by several reasons. In this article, we have tried to collect the most common reasons that may cause electric motors and water pumps to fail and point out practical solutions for each. This is even though these instructions will not include all the problems that may arise during the operation of electric motors and electric pumps, and it is not able to express the details of installation, operation, or maintenance; there will be inevitable problems during the operation of the products, outside of the mentioned cases, and in case of facing these problems, it is necessary to get help from experts in this field. In the following, we will examine some possible problems in the form of questions, the causes related to each question, and finally, we will point out the available solutions to address these problems. It should be noted that most of these cases should be investigated by experts or the manufacturing company itself.
        <br> <br>
        Troubleshooting in electric motors
        <br> <br>
        <b>1- What is the reason for the time-consuming acceleration of the engine?</b>
        <br> <br>
        The presence of a large load can cause the acceleration of the electric motor to take time. Reducing the load will be a good solution in this case. <br>
        Disturbance in the rotor can also be another reason for the acceleration of the electric motor. In this case, the rotor must be inspected and replaced if damaged. <br>
        Incorrect drive settings may cause the mentioned error. In this case, the settings must be carefully made again.
        <br>
        Low voltage when starting the engine is another cause of this problem. For this reason, the voltage drop and its cause should be checked.
        <br> <br>
        <b>2- Why is the motor rotation direction wrong?</b>
        <br> <br>
        In three-phase motors, the wrong phase sequence can lead to the reverse direction of rotation. The solution to this case is to move the wires of different phases.
        <br>
        In single-phase motors, the main reason is the reverse direction of rotation. The solution to this is to check the header and change it from the guide.
        <br><br>
        <b>3- Why does the engine overheat?</b>
        <br><br>
        This case may be due to overload, which should be identified and if possible, the load on the motor should be reduced. Of course, this is if the incoming load is greater than the nominal load.
        <br>
        Low supply voltage affects the thermal performance of the electric motor. Therefore, checking the supply voltage value is a good solution for this case.
        <br>
        Engine cooling is done through the back fan and the holes of the cooling fan cover. Therefore, taking these holes increases the temperature of the engine. In this case, clean the holes of the cooling fan cover.
        <br>
        If the ambient temperature is high, the engine performance will be affected. To solve the problem in high-temperature environments and engine heating, the load on the engine should be reduced.
        <br>
        In three-phase motors, disconnection of one of the phases leads to a two-phase motor and its temperature increase. In this case, check all the wires and ensure their correct connection. This error can also be caused by grounding one of the coils, in which case the motor must be rewound.
        <br>
        The bale balance of winding current in three-phase motors is one of the reasons for the increase in the temperature of the electric motor. In this case, the sameness of the motor winding and the supply voltage should be checked.
        <br>
        This error can be caused by mechanical parts, especially bearings. In this case, the bearing should be checked and replaced if damaged.
        <br><br>
        <b>4- What is the reason for the sound of the engine?</b>
        <br><br>
        If the sounds from the engine are created momentarily and only when the engine is started, these sounds are considered normal and no special action is needed.
        <br>
        Disturbances and defects in the electrical insulation of the winding and connecting its coils will cause a lot of noise along with smoke. In this case, the power supply should be cut off quickly and the problem should be solved. However, if the winding is burnt, the item must be rewound by authorized repairmen.
        <br>
        The looseness of the coupling connecting the motor to the load can cause noise and vibration in the electromotor. In this case, the position of the coupling and its screws should be checked.
        <br>
        Sound and noise in electric motors can be caused by the looseness of mechanical holding parts, including screws, washers, holding plates, etc. These items should be carefully checked and tightened if they are loose.
        <br>
        Another cause of noise in the engine is the non-uniformity of the air gap between the stator and the rotor. In this case, check the caps and bearings.
        <br><br>
        <b>5- Why are bearings and caps too hot?</b>
        <br><br>
        This can be caused by a bent shaft or by correcting a weak shaft. In this case, it is necessary to replace the shaft.
        <br>
        If the load on the bearing is high, its temperature will also increase. In this case, it is necessary to check the alignment of the electric motor at the installation site, and the side and end force.
        <br>
        The breaking of balls or bearings can also cause the bearing to heat up. In case of encountering this current, it is necessary to change the bearing.
        <br>
        When using the drive in electric motors, a current flows in the shaft and bearing, which causes the bearing to heat up. In these cases, using insulated bearings is a good solution.
        <br>
        Since the motor may be connected to the load by belts and pulleys, excessive tension of the belt or improper size of pulleys can cause increased bearing damage. Re-adjusting the belt tension and using a suitable-sized pulley is a good solution for this problem.
        <br>
        The type and amount of grease have a great effect on reducing the friction of the bearing balls. Therefore, to prevent the increase of temperature and the destruction of the bearing, maintain the quality and the right amount of grease and make sure of the quality of the grease.
        <br> <br>

        <b>6- Why does vibration happen in electric motors and how can it be repaired?</b>

        <br> <br>
        In most cases, the cause of noise and vibration is the same. For example, problems in the winding, coupling, and mechanical parts are common factors in the production of noise and vibration. Therefore, the solution in these cases is similar to the solution that was mentioned in response to the problem of sound generation in the electric motor.
         <br>
        If one or more rods are broken or disconnected in squirrel cage induction motors, we will encounter vibration in the motor. This case can be solved by careful examination by an expert and then replacing the rotor.
         <br>
        The imbalance of the cooling fan and the breakage of its blades will cause the engine to vibrate. Replacing the cooling fan is a simple solution to this problem.
         <br>
        Another reason for engine vibration is improper installation or the installation structure not being strong. In these cases, checking and tightening the installation connections and also strengthening the installation structure are among the existing works.
        <br> <br>
        <b>7- What is the reason for not starting the engine?</b>
        <br> <br>
        The presence of wrong connections, failure of the cable or wire, and burning of the power supply fuse can be the reason for the engine not starting. For this reason, you must check the connections and fuses.
        <br>
        Noise and vibration in electric motors can be caused by damage to mechanical parts. These items should be checked carefully and replaced if the parts are damaged.
        <br>
        The presence of a large load can cause the electric motor to remain under load and vibrate, so reducing the load is a good solution in this case.
        <br>
        In some cases, the engine is started, but it keeps turning off and on during operation. In this case, check for loose connections in the power supply line, fuses, and control.
        <br><br>
        <b>8- What are the common causes of failure of capacitor single-phase electric motors?</b>
        In these engines, if the acceleration time of the engine is too long, the engine will burn. To avoid this, check that the motor power is not too small for the load. Also, record the acceleration time. If the acceleration time is more than 3 seconds, there may be a problem with the starter capacitor.
        <br>
        Frequent and excessive starting of the engine will damage it. If the engine is started more than twenty times per hour, you should consider the necessary considerations.
        <br>
        Factors such as not placing the motor terminal voltage in the standard range or voltage surge at the input can cause damage to the motor. In this case, checking the supply voltage and providing a protector will prevent possible damage.

        <br><br>
        <span class="font-[1000] text-[#003397] text-[19px]">Troubleshooting in electro pumps:</span>
        <br><br>
        <b>1- What is the reason for not starting the pump?</b>
        <br><br>
        The presence of wrong connections, wire failure, burnt power supply fuse, and cable disconnection can be the reason for not starting the pump. For this reason, it is essential to check all connections.
        <br>
        Jamming of the shaft, impeller, or bearing is one of the reasons why domestic water pumps do not start. To check this issue, the pump must be disassembled and the necessary measures for repair or replacement must be taken.
        <br>
        The burning of the stator winding or the capacitor has a significant effect on the failure of the pump to start. In this case, the coil and capacitor should be replaced.
        <br><br>

        <b>2- Why does the pump work but there is no water suction?</b>

        <br>
        <br>
        This can be caused by the lack of water in the pump chamber. In this case, fill the inlet pipe and the pump chamber with water.
        <br>
        The water level is lower than the suction valve or the inlet valve can be the reason for the lack of water suction. In this case, adjust the installation height of the pump.
        <br>
        If there is air in the suction pipe, water suction in the pump will be disturbed. In this case, it is necessary to check the sealing of the inlet and outlet pipes.
        <br>
        Damage to the mechanical seal and the impeller of the water spreader is another reason for the mentioned error. In these cases, replacing the defective part will solve the pump problem.
        <br>
        Another reason for the lack of water suction is the wrong direction of the motor rotation. To solve this problem in three-phase motors, replace the two-phase connections, and in single-phase motors, check the header and change it according to the existing guide.
        <br>
        If the inlet filter is blocked by deposits or the water freezes in the chamber or pipes, the suction may not be done properly. To solve this problem, clean the inlet valve by removing deposits. Also, if the water freezes, start the pump after the ice melts.
        <br><br>
        <b>3- Why does the thermal switch stop the pump?</b>
        <br><br>
         Motor overload due to excessive friction and as a result of high current and heat generated causes the operation of the thermal switch. In this case, open the engine and take the necessary measures to prevent the suction of foreign materials and reduce.
         <br><br>
        <b>4- What is the reason for insufficient output pressure in the pump?</b>
        <br><br>
        Clogging of piping and inlet filter or pump housing with foreign materials can reduce the output pressure of the pump. In this case, cleaning the plumbing, one-way valve or pump housing will help to solve the problem.
        <br>
        The long length of the internal piping route and the presence of many bends in the building are some of the reasons for the insufficient output pressure in the pumps. For this case, a pump with a higher flow should be used, and if this problem is not solved, the piping route, the number of bends, and connections should be reduced as much as possible.
        <br>
        Choosing a pump with inappropriate power, head and flow can lead to insufficient output pressure in the pump. In this case, you should choose the right pump according to different parameters
        <br>
        If the diameter of the pipe is not chosen correctly, the pump will not have the right pressure. To solve this problem, the diameter of the pipe should be carefully selected according to the requirements and the diameter of the inlet and outlet of the pump.
        `,
      content_ru: `Сбои в работе электродвигателей и электронасосов могут быть вызваны несколькими причинами. В этой статье мы постарались собрать наиболее распространенные причины, которые могут привести к выходу из строя электродвигателей и водяных насосов, и указать практические решения для каждой из них. Это несмотря на то, что в данных инструкциях не описаны все проблемы, которые могут возникнуть при эксплуатации электродвигателей и электронасосов, и в них не описаны детали установки, эксплуатации или технического обслуживания; во время эксплуатации продуктов, помимо указанных случаев, неизбежно возникнут проблемы, и в случае возникновения этих проблем необходимо обратиться за помощью к специалистам в этой области. Далее мы рассмотрим некоторые возможные проблемы в форме вопросов, причины, связанные с каждым вопросом, и, наконец, укажем на доступные решения для решения этих проблем. Следует отметить, что большинство таких случаев должны расследоваться экспертами или самой компанией-производителем.
      <br> <br>
      Устранение неполадок в электродвигателях
      <br> <br>
      <b>1- В чем причина длительной разгонки двигателя?</b>
      <br> <br>
      Наличие большой нагрузки может привести к тому, что для разгона электродвигателя потребуется время. Хорошим решением в этом случае будет снижение нагрузки. <br>
      Неполадки в роторе также могут быть другой причиной ускорения работы электродвигателя. В этом случае необходимо осмотреть ротор и заменить его в случае повреждения. <br>
      Причиной указанной ошибки могут быть неправильные настройки привода. В этом случае необходимо еще раз тщательно выполнить настройки.
      <br>
      Еще одной причиной этой проблемы является низкое напряжение при запуске двигателя. По этой причине необходимо проверить падение напряжения и его причину.
      <br> <br>
      <b>2- Почему неправильно выбрано направление вращения двигателя?</b>
      <br> <br>
      В трехфазных двигателях неправильная последовательность фаз может привести к обратному направлению вращения. Решение в этом случае заключается в перемещении проводов разных фаз.
      <br>
      В однофазных двигателях основной причиной является обратное направление вращения. Решение этой проблемы состоит в том, чтобы проверить заголовок и изменить его из руководства.
      <br><br>
      <b>3- Почему двигатель перегревается?</b>
      <br><br>
      Этот случай может быть вызван перегрузкой, которую следует выявить и, по возможности, снизить нагрузку на двигатель. Конечно, это происходит в том случае, если входящая нагрузка превышает номинальную.
      <br>
      Низкое напряжение питания влияет на тепловые характеристики электродвигателя. Поэтому проверка значения напряжения питания является хорошим решением в данном случае.
      <br>
      Охлаждение двигателя осуществляется через задний вентилятор и отверстия в крышке вентилятора охлаждения. Таким образом, использование этих отверстий повышает температуру двигателя. В этом случае очистите отверстия в крышке вентилятора охлаждения.
      <br>
      Высокая температура окружающей среды отрицательно сказывается на работе двигателя. Для решения проблемы, связанной с высокой температурой окружающей среды и прогревом двигателя, следует снизить нагрузку на двигатель.
      <br>
      В трехфазных двигателях отключение одной из фаз приводит к включению двухфазного двигателя и повышению его температуры. В этом случае проверьте все провода и убедитесь в их правильном подключении. Эта ошибка также может быть вызвана заземлением одной из катушек, и в этом случае двигатель необходимо перемотать.
      <br>
      Нарушение баланса тока обмотки в трехфазных двигателях является одной из причин повышения температуры электродвигателя. В этом случае следует проверить соответствие обмотки двигателя и напряжения питания.
      <br>
      Эта ошибка может быть вызвана механическими деталями, особенно подшипниками. В этом случае подшипник следует проверить и заменить, если он поврежден.
      <br><br>
      <b>4- В чем причина шума двигателя?</b>
      <br><br>
      Если звуки, издаваемые двигателем, возникают мгновенно и только при запуске двигателя, эти звуки считаются нормальными и никаких специальных действий не требуется.
      <br>
      Нарушения и дефекты электрической изоляции обмотки и соединения ее витков могут вызвать сильный шум и появление дыма. В этом случае необходимо быстро отключить подачу электроэнергии и устранить проблему. Однако, если обмотка перегорела, изделие должно быть перемотано квалифицированным специалистом по ремонту.
      <br>
      Неплотность муфты, соединяющей двигатель с нагрузкой, может вызвать шум и вибрацию в электромоторе. В этом случае следует проверить положение муфты и ее винтов.
      <br>
      Шум в работе электродвигателей может быть вызван ослаблением механических крепежных деталей, включая винты, шайбы, крепежные пластины и т.д. Эти детали следует тщательно проверить и затянуть, если они ослаблены.
      <br>
      Другой причиной шума в двигателе является неравномерность воздушного зазора между статором и ротором. В этом случае проверьте крышки и подшипники.
      <br><br>
      <b>5- Почему подшипники и крышки слишком горячие?</b>
      <br><br>
      Это может быть вызвано погнутым валом или исправлением слабого вала. В этом случае необходимо заменить вал.
      <br>
      Если нагрузка на подшипник высока, его температура также повысится. В этом случае необходимо проверить центровку электродвигателя в месте установки, а также боковое и торцевое усилие.
      <br>
      Поломка шариков или подшипников также может привести к их нагреву. В случае возникновения этого тока необходимо сменить подшипник.
      <br>
      При использовании привода в электродвигателях по валу и подшипнику протекает ток, который вызывает нагрев подшипника. В таких случаях хорошим решением является использование изолированных подшипников.
      <br>
      Поскольку двигатель может быть подключен к нагрузке с помощью ремней и шкивов, чрезмерное натяжение ремня или шкивы неправильного размера могут привести к повреждению подшипников. Хорошим решением этой проблемы является повторная регулировка натяжения ремня и использование шкива подходящего размера.
      <br>
      Тип и количество консистентной смазки оказывают большое влияние на снижение трения шариков подшипника. Поэтому, чтобы предотвратить повышение температуры и разрушение подшипника, необходимо поддерживать качество и дозировать консистентную смазку в нужном количестве и следить за качеством консистентной смазки.
      <br> <br>

      <b>6. Почему возникает вибрация в электродвигателях и как ее можно устранить?</b>

      <br> <br>
      В большинстве случаев причина шума и вибрации одна и та же. Например, проблемы с обмоткой, соединением и механическими деталями являются распространенными факторами, приводящими к возникновению шума и вибрации. Таким образом, решение в этих случаях аналогично решению, которое было упомянуто в ответ на проблему образования звука в электродвигателе.
       <БР>
      Если в асинхронных двигателях с короткозамкнутым ротором один или несколько стержней сломаны или отсоединены, мы столкнемся с вибрацией в двигателе. Эту проблему можно решить путем тщательного осмотра специалистом и последующей замены ротора.
       <br>
      Разбалансировка вентилятора охлаждения и поломка его лопастей могут привести к вибрации двигателя. Замена вентилятора охлаждения является простым решением этой проблемы.
       <br>
      Другой причиной вибрации двигателя является неправильная установка или непрочная конструкция установки. В таких случаях необходимо выполнить проверку и затяжку монтажных соединений, а также укрепить конструкцию установки.
      <br> <br>
      <b>7. По какой причине двигатель не запускается?</b>
      <br> <br>
      Причиной того, что двигатель не запускается, может быть неправильное подключение, неисправность кабеля или провода, а также перегорание предохранителя источника питания. По этой причине необходимо проверить соединения и предохранители.
      <br>
      Шум и вибрация в электродвигателях могут быть вызваны повреждением механических деталей. Эти детали следует тщательно проверить и заменить, если они повреждены.
      <br>
      Наличие большой нагрузки может привести к тому, что электродвигатель останется под нагрузкой и начнет вибрировать, поэтому в данном случае хорошим решением является снижение нагрузки.
      <br>
      В некоторых случаях двигатель запускается, но продолжает выключаться и включаться во время работы. В этом случае проверьте, не ослаблены ли соединения в линии электропитания, предохранителях и системе управления.
      <br><br>
      <b>8. Каковы распространенные причины выхода из строя конденсаторных однофазных электродвигателей?</b>
      В этих двигателях, если время разгона двигателя будет слишком большим, двигатель загорится. Чтобы избежать этого, убедитесь, что мощность двигателя не слишком мала для нагрузки. Также запишите время разгона. Если время разгона превышает 3 секунды, возможно, проблема с конденсатором стартера.
      <br>
      Частый и чрезмерный запуск двигателя может привести к его повреждению. Если двигатель запускается более двадцати раз в час, вам следует принять необходимые меры предосторожности.
      <br>
      Такие факторы, как несоответствие напряжения на клеммах двигателя стандартному диапазону или скачок напряжения на входе, могут привести к повреждению двигателя. В этом случае проверка напряжения питания и установка защитного устройства предотвратят возможные повреждения.

      <br><br>
      <span class="шрифт-[1000] текст-[#003397] текст-[19 пикселей]">Устранение неполадок в электронасосах:</span>
      <br><br>
      <b>1- По какой причине насос не запускается?</b>
      <br><br>
      Неправильное подключение, неисправность проводов, сгоревший предохранитель источника питания и отсоединение кабеля могут быть причиной того, что насос не запустится. По этой причине важно проверить все подключения.
      <br>
`,
content_uz: `Elektr dvigatellari va elektr nasoslarning ishlashidagi uzilishlar bir necha sabablarga ko'ra yuzaga kelishi mumkin. Ushbu maqolada biz elektr motorlar va suv nasoslarining ishdan chiqishiga olib kelishi mumkin bo'lgan eng keng tarqalgan sabablarni to'plashga harakat qildik va ularning har biri uchun amaliy echimlarni ko'rsatdik. Garchi bu ko'rsatmalar elektr motorlar va elektr nasoslarning ishlashi paytida yuzaga kelishi mumkin bo'lgan barcha muammolarni o'z ichiga olmaydi va o'rnatish, ishlatish yoki texnik xizmat ko'rsatish tafsilotlarini ifoda eta olmaydi; mahsulotlarning ishlashi paytida, yuqorida aytib o'tilgan holatlardan tashqari, muqarrar muammolar bo'ladi va ushbu muammolarga duch kelganda, ushbu sohadagi mutaxassislardan yordam olish kerak. Quyida biz savollar ko'rinishidagi ba'zi mumkin bo'lgan muammolarni, har bir savol bilan bog'liq sabablarni ko'rib chiqamiz va nihoyat, ushbu muammolarni hal qilish uchun mavjud echimlarni ko'rsatamiz. Shuni ta'kidlash kerakki, ushbu holatlarning aksariyati mutaxassislar yoki ishlab chiqaruvchi kompaniyaning o'zi tomonidan tekshirilishi kerak.
<br> <br>
Elektr motorlaridagi nosozliklarni bartaraf etish
<br> <br>
<b>1-dvigatelning ko'p vaqt talab qiladigan tezlashuvining sababi nima?< / b>
<br> <br>
Katta yukning mavjudligi elektr motorining tezlashishiga vaqt talab qilishi mumkin. Yukni kamaytirish bu holda yaxshi echim bo'ladi. <br>
Rotorning buzilishi ham elektr motorining tezlashuvining yana bir sababi bo'lishi mumkin. Bunday holda, rotorni tekshirish va shikastlangan taqdirda almashtirish kerak. <br>
Noto'g'ri disk sozlamalari ko'rsatilgan xatoga olib kelishi mumkin. Bunday holda, Sozlamalar yana ehtiyotkorlik bilan bajarilishi kerak.
<br>
Dvigatelni ishga tushirishda past kuchlanish bu muammoning yana bir sababidir. Shu sababli, kuchlanishning pasayishi va uning sababini tekshirish kerak.
<br> <br>
<b>2-nima uchun vosita aylanish yo'nalishi noto'g'ri?< / b>
<br> <br>
Uch fazali motorlarda noto'g'ri faza ketma-ketligi aylanishning teskari yo'nalishiga olib kelishi mumkin. Ushbu ishning echimi turli bosqichlarning simlarini siljitishdir.
<br>
Bir fazali motorlarda asosiy sabab aylanishning teskari yo'nalishi hisoblanadi. Buning echimi sarlavhani tekshirish va uni qo'llanmadan o'zgartirishdir.
<br> <br>
<b>3-nima uchun dvigatel qizib ketadi?< / b>
<br> <br>
Bu holat ortiqcha yuk tufayli bo'lishi mumkin, uni aniqlash kerak va iloji bo'lsa, dvigatelga yukni kamaytirish kerak. Albatta, bu kiruvchi yuk nominal yukdan katta bo'lsa.
<br>
Kam ta'minot kuchlanishi elektr motorining termal ishlashiga ta'sir qiladi. Shuning uchun, besleme zo'riqishining qiymatini tekshirish bu ish uchun yaxshi echimdir.
<br>
Dvigatelni sovutish orqa fan va sovutish foniy qopqog'ining teshiklari orqali amalga oshiriladi. Shuning uchun, bu teshiklarni olish dvigatelning haroratini oshiradi. Bunday holda, sovutish foniy qopqog'ining teshiklarini tozalang.
<br>
Agar atrof-muhit harorati yuqori bo'lsa, dvigatelning ishlashiga ta'sir qiladi. Muammoni yuqori haroratli muhitda va dvigatelni isitishda hal qilish uchun dvigatelga yukni kamaytirish kerak.
<br>
Uch fazali motorlarda fazalardan birining uzilishi ikki fazali motorga va uning haroratining oshishiga olib keladi. Bunday holda, barcha simlarni tekshiring va ularning to'g'ri ulanishini ta'minlang. Bu xatoga rulonlardan birini topraklama ham sabab bo'lishi mumkin, bu holda motorni orqaga qaytarish kerak.
<br>
Uch fazali dvigatellarda o'rash oqimining balya balansi elektr motorining haroratining ko'tarilishining sabablaridan biridir. Bunday holda, vosita o'rashining bir xilligi va besleme zo'riqishini tekshirish kerak.
<br>
Ushbu xatoga mexanik qismlar, ayniqsa rulmanlar sabab bo'lishi mumkin. Bunday holda, rulman tekshirilishi va shikastlangan taqdirda almashtirilishi kerak.
<br> <br>
<b>4-dvigatel ovozining sababi nima?< / b>
<br> <br>
Agar dvigateldan tovushlar bir zumda va faqat dvigatel ishga tushirilganda yaratilsa, bu tovushlar normal hisoblanadi va maxsus harakat talab etilmaydi.
<br>
O'rashning elektr izolyatsiyasidagi buzilishlar va nuqsonlar va uning rulonlarini ulash tutun bilan birga juda ko'p shovqinlarni keltirib chiqaradi. Bunday holda, elektr ta'minoti tezda uzilishi va muammoni hal qilish kerak. Biroq, agar o'rash kuygan bo'lsa, buyum vakolatli ta'mirchilar tomonidan qayta o'ralishi kerak.
<br>
Motorni yukga ulaydigan ulanishning bo'shashishi elektromotorda shovqin va tebranishga olib kelishi mumkin. Bunday holda, muftaning holati va uning vintlarini tekshirish kerak.
<br>
Elektr motorlaridagi tovush va shovqin mexanik ushlab turuvchi qismlarning, shu jumladan vintlardek, yuvgichlar, ushlab turuvchi plitalar va boshqalarning bo'shashishidan kelib chiqishi mumkin. Agar ular bo'shashgan bo'lsa, bu narsalarni diqqat bilan tekshirish va mahkamlash kerak.
<br>
Dvigateldagi shovqinning yana bir sababi stator va rotor orasidagi havo bo'shlig'ining bir xil emasligidir. Bunday holda, qopqoq va rulmanlarni tekshiring.
<br> <br>
<b>5-nima uchun rulmanlar va qopqoqlar juda issiq?< / b>
<br> <br>
Bunga egilgan mil yoki zaif milni tuzatish sabab bo'lishi mumkin. Bunday holda, milni almashtirish kerak.
<br>
Agar rulmandagi yuk yuqori bo'lsa, uning harorati ham oshadi. Bunday holda, o'rnatish joyida elektr motorining hizalanishini va yon va oxirgi kuchini tekshirish kerak.
<br>
To'plar yoki podshipniklarning sinishi ham rulmanning qizib ketishiga olib kelishi mumkin. Ushbu oqimga duch kelganda, rulmanni o'zgartirish kerak.
<br>
Drayvni elektr motorlarida ishlatganda, mil va rulmanda oqim oqadi, bu esa rulmanning isishiga olib keladi. Bunday hollarda izolyatsiyalangan rulmanlardan foydalanish yaxshi echimdir.
<br>
Dvigatel yukga kamar va Kasnaklar orqali ulanishi mumkinligi sababli, kamarning haddan tashqari kuchlanishi yoki kasnaklarning noto'g'ri o'lchami rulmanning shikastlanishiga olib kelishi mumkin. Kamar kuchlanishini qayta sozlash va mos o'lchamdagi kasnaqdan foydalanish bu muammo uchun yaxshi echimdir.
<br>
Yog ' turi va miqdori rulman to'plarining ishqalanishini kamaytirishga katta ta'sir ko'rsatadi. Shuning uchun, haroratning oshishi va rulmanning yo'q qilinishini oldini olish uchun yog'ning sifati va to'g'ri miqdorini saqlang va yog'ning sifatiga ishonch hosil qiling.
<br> <br>

<b>6 - nima uchun tebranish elektr motorlarida sodir bo'ladi va uni qanday tuzatish mumkin?< / b>

<br> <br>
Ko'pgina hollarda shovqin va tebranishning sababi bir xil. Masalan, o'rash, ulash va mexanik qismlardagi muammolar shovqin va tebranish ishlab chiqarishda keng tarqalgan omillardir. Shuning uchun, bu holatlarda echim elektr motorida tovush hosil qilish muammosiga javoban aytib o'tilgan echimga o'xshaydi.
 <br>
Agar sincap qafas induksion motorlarida bir yoki bir nechta novda singan yoki uzilgan bo'lsa, biz dvigatelda tebranishga duch kelamiz. Ushbu ishni mutaxassis tomonidan sinchkovlik bilan tekshirish va keyin rotorni almashtirish orqali hal qilish mumkin.
 <br>
Sovutish foniyining muvozanati va uning pichoqlarining sinishi dvigatelning tebranishiga olib keladi. Sovutish foniyini almashtirish bu muammoning oddiy echimidir.
 <br>
Dvigatel tebranishining yana bir sababi noto'g'ri o'rnatish yoki o'rnatish tuzilishi kuchli emas. Bunday hollarda, o'rnatish ulanishlarini tekshirish va mahkamlash, shuningdek, o'rnatish tuzilishini mustahkamlash mavjud ishlar qatoriga kiradi.
<br> <br>
<b>7-dvigatelni ishga tushirmaslikning sababi nima?< / b>
<br> <br>
Noto'g'ri ulanishlarning mavjudligi, kabel yoki simning ishdan chiqishi va quvvat manbai sug'urtasining yonishi dvigatelning ishga tushmasligiga sabab bo'lishi mumkin. Shuning uchun siz ulanishlar va sigortalarni tekshirishingiz kerak.
<br>
Elektr motorlaridagi shovqin va tebranish mexanik qismlarning shikastlanishidan kelib chiqishi mumkin. Ushbu narsalarni diqqat bilan tekshirish va agar qismlar shikastlangan bo'lsa, almashtirish kerak.
<br>
Katta yukning mavjudligi elektr motorining yuk ostida qolishiga va tebranishiga olib kelishi mumkin, shuning uchun yukni kamaytirish bu holda yaxshi echimdir.
<br>
Ba'zi hollarda dvigatel ishga tushiriladi, lekin u ish paytida o'chadi va yoqiladi. Bunday holda, elektr ta'minoti liniyasida bo'shashgan ulanishlarni, sigortalarni va boshqaruvni tekshiring.
<br> <br>
<b>8 - kondensator bir fazali elektr motorlarining ishdan chiqishining umumiy sabablari nimada?< / b>
Ushbu dvigatellarda, agar dvigatelning tezlashuv vaqti juda uzoq bo'lsa, dvigatel yonib ketadi. Bunga yo'l qo'ymaslik uchun vosita quvvati yuk uchun juda kichik emasligini tekshiring. Shuningdek, tezlashtirish vaqtini yozib oling. Agar tezlashtirish vaqti 3 soniyadan ortiq bo'lsa, starter kondansatkichida muammo bo'lishi mumkin.
<br>
Dvigatelning tez-tez va ortiqcha ishga tushirilishi unga zarar etkazadi. Agar dvigatel soatiga yigirma martadan ko'proq boshlangan bo'lsa, kerakli fikrlarni ko'rib chiqishingiz kerak.
<br>
Dvigatel terminalining kuchlanishini standart diapazonga qo'ymaslik yoki kirishdagi kuchlanish kabi omillar motorga zarar etkazishi mumkin. Bunday holda, besleme zo'riqishini tekshirish va himoyachi bilan ta'minlash mumkin bo'lgan zararni oldini oladi.

<br> <br>
<span class="font-[1000] matn-[#003397] matn-[19px]">elektr nasoslari muammo bartaraf:</span>
<br> <br>
<b>1-nasosni ishga tushirmaslikning sababi nima?< / b>
<br> <br>
Noto'g'ri ulanishlarning mavjudligi, simning uzilishi, yonib ketgan quvvat manbai sug'urtasi va kabelning uzilishi nasosni ishga tushirmaslik uchun sabab bo'lishi mumkin. Shu sababli, barcha ulanishlarni tekshirish juda muhimdir.
<br>
`
    },
    {
      id: 6,
      type: "Technical Articles",
      category: "Technical Articles",
      text_en:
        "Electrogen’s Membership in The long List of The Ministry of Petroleum",
      text_ru: "Членство Electrogen в длинном списке Министерства нефти",
      text_uz: "Elektrogenning Neft vazirligining uzoq ro'yxatiga a'zoligi",
      data: "2024.03.09",
      img: "https://electrogenco.com/en/wp-content/uploads/2024/03/01.jpg",
      subtext_en:
        "Once again, we were able to achieve success by relying on our ability and ...",
      subtext_ru:
        "В очередной раз мы смогли добиться успеха, полагаясь на свои способности и...",
      subtext_uz:
        "Yana bir bor, biz o'z qobiliyatimizga tayanib muvaffaqiyatga erishdik va ...",
        content_en: `
        <div class="text-center">
        <br><br>
        <b class="text-center">Once again, we were able to achieve success by relying on our ability and expertise and registering the name of Electrogen in the vendor list of the Ministry of Petroleum.</b>
        <br><br></div>
        `,
        content_uz: `
        <div class= "text-center">
<br> <br>
<b class="text-center">yana bir bor, biz o'z qobiliyatimiz va tajribamizga tayanib, elektrogen nomini neft vazirligining sotuvchilar ro'yxatiga kiritish orqali muvaffaqiyatga erishdik.</b>
<br> <br></div>`,
content_ru: `
<div class="text-center">
        <br><br>
        <b class="text-center">В очередной раз мы смогли добиться успеха, положившись на наши способности и опыт и зарегистрировав название Electrogen в списке поставщиков Министерства нефти.</b>
        <br><br></div>`
    },
  ]);

  return { blogs };
});
