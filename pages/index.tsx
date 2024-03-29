import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "../components/heading";

interface ButtonLinkProp {
  title: string;
  link: string;
}

const ButtonLink: React.FC<ButtonLinkProp> = ({ title, link }) => (
  <Link href={link}>
    <button className="bg-teal-600 w-28 rounded-md p-1 text-white hover:bg-teal-700 font-bold m-4">
      {title}
    </button>
  </Link>
);

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full text-gray-700 pb-3">
      <p className="bg-zinc-100 rounded-md p-2 text-center m-5">
        AI engineer, Full-Stack Web developer, IoT developer
      </p>
      <h3 className="md:text-xl m-4 text-center">
        主要从事AI, IoT, Full-Stack Web开发
      </h3>
      <Heading title={"作品"} />
      <p className="m-4">
        开发过各种不同类型的AI算法，涉及算法，数据特征工程，模型训练，模型调优，模型部署等等。
      </p>
      <p className="ml-4">
        开发过各种不同类型的桌面软件，涉及上位机开发，工业软件开发，通信软件开发，图像处理等等。
      </p>
      <Heading title={"内容"} />
      <div className="ml-5">
        <p className="py-2">
          <strong className="pr-3">AI算法:</strong>
          涉及GNN, RNN, LSTM, Transformer, BERT, GPT, GAN, DQN等等
        </p>
        <p className="py-2">
          <strong className="pr-3">桌面开发:</strong>
          涉及跨平台桌面应用软件开发，使用 PyQt5/6, PySide6, Avalonia, Electron,
          C++ Qt等等
        </p>
        <p className="py-2">
          <strong className="pr-3">web开发:</strong>
          前端Reactjs, 后端FastAPI, Django开发，Flask, Openstack二次开发等待
        </p>
        <p className="py-2">
          <strong className="pr-4">APP开发:</strong>使用ReactNative开发跨平台APP
        </p>
      </div>
      <Heading title={"我 ♥"} />
      <code className="ml-10 bg-gray-100 p-2 w-fit text-blue-400 opacity-70">
        Coding, Reading, Writing, Thinking, Playing, Sleeping
      </code>
      <Heading title={"其他链接"} />
      <div className="flex flex-grow align-center items-center">
        <p className="my-4 ml-10 text-sm">
          <a
            href="https://github.com/bruceunx"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/github-light.svg"
              width={20}
              height={20}
              alt="bruceunx"
            />
          </a>
        </p>
        <p className="ml-10 text-sm text-blue-400">
          <a
            href="https://blog.csdn.net/bruceunx"
            target="_blank"
            rel="noreferrer"
          >
            @csdn
          </a>
        </p>
      </div>
      <ButtonLink link={"/blog"} title={"最新博客"} />
    </div>
  );
};

export default Home;
