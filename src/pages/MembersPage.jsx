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
  bio: "Hello My name is Erik and I am the president of Arbalest Rocketry. I am currently a second year Space Engineering student at Lassonde. As president I oversee all operations and lead the team. When I am not building rockets you can catch me on Slime Rancher (1500+ hours btw).",
  email: "Erik@gmail.com",
};

const teamMembers = [
  {
    name: "Izabel Werocy",
    role: "Vice President",
    img: "/members/IzabelWerocy.webp",
    bio: "Hi, my name is Izabel and I am the Vice President of Arbalest Rocketry. Full bio coming soon.",
    email: "izabel@example.com",
  },
  {
    name: "David Abeziz",
    role: "Payload Electrical Lead",
    img: "/members/DavidAbeziz.webp",
    bio: "Hi, my name is David and I am the Payload Electrical Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "david@example.com",
  },
  {
    name: "Hussain Almilli",
    role: "Fluid Systems Lead",
    img: "/members/HussainAlmilli.webp",
    bio: "Hi, my name is Hussain and I am the Fluid Systems Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "hussain@example.com",
  },
  {
    name: "Ivor Anand",
    role: "Launch Tower Lead",
    img: "/members/IvorAnand.webp",
    bio: "Hi, my name is Ivor and I am the Launch Tower Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "ivor@example.com",
  },
  {
    name: "Sanjana Bhatt",
    role: "Test Stand Lead",
    img: "/members/SanjanaBhatt.webp",
    bio: "Hi, my name is Sanjana and I am the Test Stand Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "sanjana@example.com",
  },
  {
    name: "Jordan Birley",
    role: "Propulsion Lead",
    img: "/members/JordanBirley.webp",
    bio: "Hi, my name is Jordan and I am the Propulsion Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "jordan@example.com",
  },
  {
    name: "Michael Chu",
    role: "Imaging Lead",
    img: "/members/MichaelChu.webp",
    bio: "Hi, my name is Michael and I am the Imaging Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "michael@example.com",
  },
  {
    name: "Iltebir Danwar",
    role: "Vehicle Integration Lead",
    img: "/members/IltebirDanwar.webp",
    bio: "Hi, my name is Iltebir and I am the Vehicle Integration Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "iltebir@example.com",
  },
  {
    name: "Ronik Jagdev",
    role: "Aerostructure Lead",
    img: "/members/RonikJagdev.webp",
    bio: "Hi, my name is Ronik and I am the Aerostructure Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "ronik@example.com",
  },
  {
    name: "Georgii Lavreniuk",
    role: "Ground Station Lead",
    img: "/members/GeorgiiLavreniuk.webp",
    bio: "Hi, my name is Georgii and I am the Ground Station Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "georgii@example.com",
  },
  {
    name: "Moiza Mahmood",
    role: "Business Lead",
    img: "/members/MoizaMahmood.webp",
    bio: "Hi, my name is Moiza and I am the Business Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "moiza@example.com",
  },
  {
    name: "Seyed Masoumi Lari",
    role: "Payload Science Lead",
    img: "/members/SeyedMasoumiLari.webp",
    bio: "Hi, my name is Seyed and I am the Payload Science Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "seyed@example.com",
  },
  {
    name: "Nathan Minuk",
    role: "Payload Engineering Lead",
    img: "/members/NathanMinuk.webp",
    bio: "Hi, my name is Nathan and I am the Payload Engineering Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "nathan@example.com",
  },
  {
    name: "Mihir Patel",
    role: "Chief Design Officer",
    img: "/members/MihirPatel.webp",
    bio: "Hi, my name is Mihir and I am the Chief Design Officer at Arbalest Rocketry. Full bio coming soon.",
    email: "mihir@example.com",
  },
  {
    name: "Tom Pham",
    role: "Avionics Lead",
    img: "/members/TomPham.webp",
    bio: "Hi, my name is Tom and I am the Avionics Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "tom@example.com",
  },
  {
    name: "Ido Shakarghi",
    role: "Payload Software Lead",
    img: "/members/IdoShakarghi.webp",
    bio: "Hi, my name is Ido and I am the Payload Software Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "ido@example.com",
  },
  {
    name: "Gavin Virdee",
    role: "Composite Lead",
    img: "/members/GavinVirdee.webp",
    bio: "Hi, my name is Gavin and I am the Composite Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "gavin@example.com",
  },
  {
    name: "Jose Zambrano Lopez",
    role: "Ground Station Lead",
    img: "/members/JoseZambranoLopez.webp",
    bio: "Hi, my name is Jose and I am the Ground Station Lead at Arbalest Rocketry. Full bio coming soon.",
    email: "jose@example.com",
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
        className="member-modal"
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
        <MemberPhoto member={member} className="member-modal-photo" lazy={false} />
        {member.bio && <p className="member-modal-bio">{member.bio}</p>}
        {member.email && (
          <div className="member-modal-contact">
            <h3 className="member-modal-contact-title">Contact</h3>
            <a href={`mailto:${member.email}`}>{member.email}</a>
          </div>
        )}
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

          <div className="team-grid team-grid-lead" role="list">
            <MemberCard member={president} onOpen={setSelected} />
          </div>

          <div className="team-grid" role="list">
            {teamMembers.map((m) => (
              <MemberCard key={m.name} member={m} onOpen={setSelected} />
            ))}
          </div>

          <div className="join-cta">
            <h2 className="join-title">Are you a student looking to join?</h2>
            <p className="join-subtitle">
              Become part of Arbalest Rocketry and help us build the future of aerospace innovation.
            </p>
            <a
              href="https://discord.gg/HyNhqknDFN"
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
