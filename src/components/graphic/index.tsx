
import { BaseLayout } from "../../layouts";
import { ContainerGraphic } from "./ContainerGraphic";
import { GraphicBar, GraphicBarProps } from "./GraphicBar";
import { TitleGraphic } from "./TitleGraphic";

interface GraphicProps extends GraphicBarProps {
  title: string
}

export const Graphic = ({title,labels,arrayDados}:GraphicProps) => {

  return (
    <BaseLayout>
      <ContainerGraphic>
        <TitleGraphic >{title}</TitleGraphic>
        <GraphicBar labels={labels} arrayDados={arrayDados} />
      </ContainerGraphic>
    </BaseLayout>
  );
};
