import { useNavigate, useLocation } from "react-router-dom";

const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
};

export default useScrollToSection;