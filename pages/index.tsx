import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="red"
      roundImage
      subtitle="profile"
      title="Scott Moss"
      description="15 public playlists"
      image="https://frontendmasters.github.io/fullstack-app-next-website/images/profile.png"
    >
      <div>Home page</div>
    </GradientLayout>
  );
};
export default Home;
