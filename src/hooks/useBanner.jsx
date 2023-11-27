import { useEffect, useState } from "react";

const useBanner = () => {
  const [banners, setBanners] = useState([]);
  const [BannersLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/banners")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBanners(data);
        setLoading(false);
      });
  }, []);
  return [banners, BannersLoading];
};

export default useBanner;
