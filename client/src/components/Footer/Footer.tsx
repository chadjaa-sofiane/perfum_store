import { FooterLinkSection } from "./FooterLinkSection";
import { ReactComponent as FaceBookIcon } from "@/assets/svgs/facebook.svg";
import { ReactComponent as TwitterIcon } from "@/assets/svgs/twitter.svg";
import { ReactComponent as InstagramIcon } from "@/assets/svgs/instagram.svg";
import { Container, Wrapper } from "@/components/core";
import "./Footer.style.css";

export const Footer = () => {
  return (
    <footer>
      <Wrapper color="dark">
        <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-between py-8">
          <FooterLinkSection
            title="Links"
            links={[
              {
                label: "F.A.Q.",
                link: "#",
              },
              {
                label: "Privacy Policy",
                link: "#",
              },
              {
                label: "Terms & Conditions",
                link: "#",
              },
              {
                label: "support",
                link: "#",
              },
            ]}
          />
          <FooterLinkSection
            title="contact us"
            links={[
              {
                label: "555-5555-5555-555",
                link: "",
              },
              {
                label: "shoesFloas@contact.com",
                link: "",
              },
              {
                label: "8231 Oak Meadow Drive Bronx, NY 10463 (random!!)",
                link: "",
              },
            ]}
          />
          <FooterLinkSection
            title="socials"
            links={[
              {
                label: (
                  <SocialMediaContainer>
                    <FaceBookIcon /> Facebook
                  </SocialMediaContainer>
                ),
                link: "",
              },
              {
                label: (
                  <SocialMediaContainer>
                    <TwitterIcon /> Twitter
                  </SocialMediaContainer>
                ),
                link: "",
              },
              {
                label: (
                  <SocialMediaContainer>
                    <InstagramIcon /> instargam
                  </SocialMediaContainer>
                ),
                link: "",
              },
            ]}
          />
        </Container>
        <Container className="mt-8 px-32 flex justify-end">
          <h3>
            desinged by <span className="font-bold"> @chadjaa_sofiane </span>.
          </h3>
        </Container>
      </Wrapper>
    </footer>
  );
};

const SocialMediaContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="footer_social_icon flex items-center gap-2"> {children} </div>
);
