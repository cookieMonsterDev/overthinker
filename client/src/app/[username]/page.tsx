interface ProfilePageProps {
  params: { username: string };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  return (
    <div>
      <div>{params.username}</div>
    </div>
  );
};

export default ProfilePage;
