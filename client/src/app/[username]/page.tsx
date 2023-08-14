import { findUserByUsernameService } from "@/services";
import { Metadata } from "next";

interface ProfilePageProps {
  params: { username: string };
}

export const generateMetadata = async ({
  params,
}: ProfilePageProps): Promise<Metadata> => {

  const user = await findUserByUsernameService(params.username)

  return {
    title: `${user.username} - OverThinker`,
    description: user.bio ? `${user.bio.slice(0, 250)}` : 'some random bio',
    openGraph: {
      title: `${user.username} - OverThinker`,
      description: user.bio ? `${user.bio.slice(0, 250)}` : 'some random bio',
    },
  };
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
  return (
    <div>
      <div>{params.username}</div>
    </div>
  );
};

export default ProfilePage;
