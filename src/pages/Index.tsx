import { useState } from "react";
import RestaurantNav from "@/components/RestaurantNav";
import RestaurantHeroAbout from "@/components/RestaurantHeroAbout";
import RestaurantMenuGallery from "@/components/RestaurantMenuGallery";
import RestaurantTeamReviewsReservation from "@/components/RestaurantTeamReviewsReservation";

export default function Index() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2" });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-cream font-golos">
      <RestaurantNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        fullMenuOpen={fullMenuOpen}
        setFullMenuOpen={setFullMenuOpen}
      />
      <RestaurantHeroAbout />
      <RestaurantMenuGallery
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setFullMenuOpen={setFullMenuOpen}
      />
      <RestaurantTeamReviewsReservation
        form={form}
        setForm={setForm}
        handleFormChange={handleFormChange}
      />
    </div>
  );
}
