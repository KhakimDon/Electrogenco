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
            BLDC motor is one of the electric motors that can replace single-phase induction motors in the common water cooler system. These motors are developed based on DC motors, and in the ideal case, the waveform of the stator current is in the form of 6 bridges and a square, similar to the DC machine. with the difference that electronic commutation has replaced the usual mechanical commutation.
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
    },
  ]);

  return { blogs };
});
