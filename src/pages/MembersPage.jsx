import { useEffect, useState } from "react";
import "./Team.css";
import Footer from "../Footer";

// Photos: put each image in public/members/ using the exact file name in `img`.
// Until a photo exists, the card shows the person's initials instead.
// Bio: the short intro shown when someone clicks a card. Leave "" to hide it.
// Email: optional; adds a Contact section to the pop-up when set.
const president = {
  name: "Erik Das",
  role: "President",
  img: "/members/ErikDas.webp",
  bio: "As President of Arbalest Rocketry, Erik leads a multidisciplinary engineering team pushing the boundaries of collegiate aerospace at York University. In this role, he directs team communications across university administration, industry sponsors, and the broader public. In addition, he oversees technical milestones, operational logistics, and team recruitment, ensuring members have the resources and mentorship needed to design, build, and fly rockets at Launch Canada.",
  email: "erik2007das@gmail.com",
};

const teamMembers = [
  {
    name: "Izabel Werocy",
    role: "Vice President",
    img: "/members/IzabelWerocy.webp",
    bio: "Second-year Space Engineering student at York University and Vice President of Arbalest Rocketry, working on fluid design for the liquid rocket.",
    email: "izaw@my.yorku.ca",
  },
  {
    name: "David Abeziz",
    role: "Payload Electrical Lead",
    img: "/members/DavidAbeziz.webp",
    bio: "I'm a 5th-year Space Engineering student at YorkU, and I'm the Payload Electrical Team lead this year! I enjoy working with electronics and designing things! I also love Space and Astronomy 🚀, sci-fi, Superheroes, and Music (I take a break from work-related stress and replace it with violin practice 🎻 stress 🤦‍♂️)",
    email: "david.abeziz4@gmail.com",
  },
  {
    name: "Hussain Almilli",
    role: "Treasurer / Fluid Systems Lead",
    img: "/members/HussainAlmilli.webp",
    bio: "I’m a second year mechanical engineer at York. At Arbalest I work on injector design, ground station equipment, and assist with propellant plumbing.",
    email: "hussainalmilliuni@gmail.com",
  },
  {
    name: "Ivor Anand",
    role: "Launch Tower Lead",
    img: "/members/IvorAnand.webp",
    bio: "Fueled by pelmeni and questionable engineering decisions",
    email: "ivor15@my.yorku.ca",
  },
  {
    name: "Sanjana Bhatt",
    role: "Test Stand Lead",
    img: "/members/SanjanaBhatt.webp",
    bio: "Sanjana is a third year in mechanical engineering. Her role in Arbalest Rocketry is designing and manufacturing a liquid engine test stand, as well as mentoring members who are interested in the same project or similar.",
    email: "sanjqna@my.yorku.ca",
  },
  {
    name: "Jordan Birley",
    role: "Propulsion Lead",
    img: "/members/JordanBirley.webp",
    bio: "",
    email: "",
  },
  {
    name: "Michael Chu",
    role: "Imaging Lead",
    img: "/members/MichaelChu.webp",
    bio: "Hi, I eat dirt",
    email: "michaelchu023507@gmail.com",
  },
  {
    name: "Iltebir Danwar",
    role: "Vehicle Integration Lead",
    img: "/members/IltebirDanwar.webp",
    bio: "Second year space engineering student, leading the development of the electronics for the propulsion and the plumbing system.",
    email: "iltebir.danwar1@gmail.com",
  },
  {
    name: "Ronik Jagdev",
    role: "Aerostructure Lead",
    img: "/members/RonikJagdev.webp",
    bio: "I love the both the theoretical and technical parts of engineering. Working on active control systems, mechanical design, and metal manufacturing. I enjoy making personal projects and components on the lathe 🙂",
    email: "ronik.jagdev@gmail.com",
  },
  {
    name: "Georgii Lavreniuk",
    role: "Ground Station Lead",
    img: "/members/GeorgiiLavreniuk.webp",
    bio: "In this world anything can be an antenna, I just make sure the ones we design and make are useful.",
    email: "georgiilavreniuk13@gmail.com",
  },
  {
    name: "Seyed Masoumi Lari",
    role: "Payload Science Lead",
    img: "/members/SeyedMasoumiLari.webp",
    bio: "I am the payload lead for Arbalest. My job is to design and execute scientific experiments in collaboration with various labs at York University. Most recently, me and my team made a scientific discovery onboard the Red Robin rocket!",
    email: "seyedml@my.yorku.ca",
  },
  {
    name: "Nathan Minuk",
    role: "Payload Engineering Lead",
    img: "/members/NathanMinuk.webp",
    bio: "To introduce myself my name is Nathan I am the current payload lead on Arbalest. My role entails ensuring the payload project runs on time, delegating tasks to payload members and overseeing the overall design for the payload.",
    email: "minuknathan@gmail.com",
  },
  {
    name: "Mihir Patel",
    role: "Chief Design Officer",
    img: "/members/MihirPatel.webp",
    bio: "He's Arbalest's Chief Design Officer, responsible for ensuring the rocket produces thrust rather than 5 big booms. With 6–7 successful launches and nominal recoveries under his belt, he's hoping to add another to the list preferably in one piece.",
    email: "mihir4@my.yorku.ca",
  },
  {
    name: "Tom Pham",
    role: "Avionics Lead",
    img: "/members/TomPham.webp",
    bio: "He's Arbalest Rocketry Avionics Lead, working on PCBs, avionic structures, and firmware. He also undergraduate research student with research in navigation system. He also York university badminton varsity team player. Hella aura!!!! 676767",
    email: "thachtommy2005@gmail.com",
  },
  {
    name: "Ido Shakarghi",
    role: "Payload Software Lead",
    img: "/members/IdoShakarghi.webp",
    bio: "",
    email: "",
  },
  {
    name: "Gavin Virdee",
    role: "Composite Lead",
    img: "/members/GavinVirdee.webp",
    bio: "Gavin Virdee is a Mechatronics Engineering student at York University and the Composites Lead for Arbalest Rocketry. In this role, he oversees the design, analysis, and fabrication of the rocket's lightweight composite structures. Leveraging his experience with SolidWorks and hands-on machining, Gavin ensures that all composite components, from the airframe to the aerodynamic surfaces, are optimized for structural integrity during high-altitude flights. After graduation, he plans to apply his manufacturing expertise to large-scale operations in the commercial vehicle body-building industry.",
    email: "gvirdeee@gmail.com",
  },
  {
    name: "Jose Zambrano Lopez",
    role: "Ground Station Lead",
    img: "/members/JoseZambranoLopez.webp",
    bio: "As an Electrical Engineering student at the Lassonde School of Engineering and the Ground Station Team Lead, Jose specializes in developing reliable wireless telemetry systems. Leveraging his background in embedded hardware, he directs the design of custom RF and digital interfaces for real-time monitoring of critical flight data.",
    email: "jzambra@my.yorku.ca",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function MemberPhoto({ member, className, lazy = true }) {
  const [failed, setFailed] = useState(false);

  if (!member.img || failed) {
    return (
      <div className={`${className} team-photo-placeholder`} aria-hidden="true">
        {initials(member.name)}
      </div>
    );
  }

  return (
    <img
      className={className}
      src={member.img}
      alt={member.name}
      loading={lazy ? "lazy" : "eager"}
      decoding="async"
      width="480"
      height="480"
      onError={() => setFailed(true)}
    />
  );
}

function MemberCard({ member, onOpen }) {
  return (
    <div role="listitem">
      <button
        type="button"
        className="team-card"
        onClick={() => onOpen(member)}
        aria-haspopup="dialog"
      >
        <MemberPhoto member={member} className="team-photo" />
        <div className="team-text">
          <h2 className="team-name">{member.name}</h2>
          <p className="team-role">{member.role}</p>
        </div>
      </button>
    </div>
  );
}

function MemberModal({ member, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="member-modal-backdrop" onClick={onClose}>
      <div
        className={`member-modal${member.bio || member.email ? "" : " member-modal-compact"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="member-modal-name"
        tabIndex={-1}
        ref={(el) => el?.focus()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="member-modal-header">
          <h2 id="member-modal-name" className="member-modal-name">{member.name}</h2>
          <p className="member-modal-role">{member.role}</p>
        </div>
        <div className="member-modal-body">
          <MemberPhoto member={member} className="member-modal-photo" lazy={false} />
          <div className="member-modal-info">
            {member.bio && <p className="member-modal-bio">{member.bio}</p>}
            {member.email && (
              <div className="member-modal-contact">
                <h3 className="member-modal-contact-title">Contact</h3>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MembersPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <main className="team-page">
        <section className="team-section" aria-labelledby="team-title">
          <h1 id="team-title" className="team-title">
            Meet the Leads
          </h1>

          {/* Top row: President and Vice President (first entry in teamMembers) */}
          <div className="team-grid team-grid-lead" role="list">
            <MemberCard member={president} onOpen={setSelected} />
            <MemberCard member={teamMembers[0]} onOpen={setSelected} />
          </div>

          <div className="team-grid" role="list">
            {teamMembers.slice(1).map((m) => (
              <MemberCard key={m.name} member={m} onOpen={setSelected} />
            ))}
          </div>

          <div className="join-cta">
            <h2 className="join-title">Are you a student looking to join?</h2>
            <p className="join-subtitle">
              Become part of Arbalest Rocketry and help us build the future of aerospace innovation.
            </p>
            <a
              href="https://discord.gg/qDub9Uvx8J"
              target="_blank"
              rel="noopener noreferrer"
              className="join-btn"
            >
              Join Our Discord
            </a>
          </div>
        </section>
      </main>

      {selected && (
        <MemberModal member={selected} onClose={() => setSelected(null)} />
      )}

      <Footer />
    </>
  );
}
