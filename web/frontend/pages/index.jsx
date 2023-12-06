import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Frame,
  Loading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { trophyImage } from "../assets";
import { ProductsCard } from "../components";
import { useAppQuery } from "../hooks";

export default function HomePage() {
  const { data, loading, isError, error } = useAppQuery({
    url: "/api/get-data",
  });
  const { t } = useTranslation();
  console.log({ data });

  if (loading) {
    return (
      <Frame>
        <Loading />
        <TitleBar>Please be patient...</TitleBar>
      </Frame>
    );
  }

  if (isError || error) {
    return (
      <Frame>
        <Card>
          <Text>
            Error retrieving data from the server. Please try again later.
          </Text>
        </Card>
      </Frame>
    );
  }

  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <TextContainer>
        <Text>HI</Text>
      </TextContainer>
      {data.map((item, i) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </Page>
  );
}
