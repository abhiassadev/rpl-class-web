import React from "react";

import "./App.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Link, Button, Image, Chip } from "@nextui-org/react";

import GradientElement from "./components/GradientElement";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Structure", "Galleries"];

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar
        // isBlurred={false}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent flex items-center py-5"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href="" className="text-xl font-bold text-white">
              RPL 2026
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center" className="hidden sm:flex sm:gap-10">
          <NavbarItem>
            <Link href="" className="text-sm font-medium text-white opacity-80">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="" className="text-sm font-medium text-white opacity-80">
              Abous Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="" className="text-sm font-medium text-white opacity-80">
              Structure
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="" className="text-sm font-medium text-white opacity-80">
              Galleries
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <Button
            as={Link}
            color="primary"
            className="hidden text-sm font-semibold text-white sm:flex"
          >
            Contact Us
          </Button>
        </NavbarContent>
        <NavbarMenu className="bg-black max-h-44 max-w-44 rounded-2xl fixed right-5">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={"#" + item.toLowerCase()}
                className="text-sm font-medium text-white"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <main className="p-5">
        <section id="home" className="">
          <div className="mt-20">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-5">
                <Link
                  href="https://instagram.com/elevenrpl__"
                  className="text-md font-medium text-white sm:text-lg"
                >
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link
                  href="https://www.tiktok.com/@xirplnecy"
                  className="text-md font-medium text-white sm:text-lg"
                >
                  <i className="bi bi-tiktok"></i>
                </Link>
                <Link
                  href="https://ngl.link/rpl18388"
                  className="text-md font-medium text-white sm:text-lg"
                >
                  <i className="bi bi-link"></i>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 text-wrap text-center mt-3 sm:gap-5">
              <p className="text-base font-medium text-white sm:text-lg">
                Welcome To Class
              </p>
              <h1 className="text-2xl font-semibold text-white sm:text-5xl">
                Rekayasa Perangkat Lunak SMKN 1 Cipeundeuy
              </h1>
              <p className="text-sm font-normal text-white opacity-80 sm:text-lg sm:w-96">
                Ini adalah Website Resmi Kelas Rekayasa Perangkat Lunak Angkatan
                2026.
              </p>
            </div>
            <div className="flex justify-center items-center mt-6">
              <Button
                as={Link}
                color="primary"
                className="px-6 text-sm font-medium text-white sm:px-10"
              >
                View More
              </Button>
            </div>
            <Chip
              size="sm"
              className="bg-white rotate-12 absolute top-32 right-5"
            >
              <i className="bi bi-code text-base mr-1"></i>
              Software Engineering
            </Chip>
            <Chip
              size="sm"
              className="bg-white -rotate-12 absolute top-44 left-5"
            >
              <i className="bi bi-person-fill text-base mr-1"></i>
              37 People
            </Chip>
          </div>
        </section>
        <section
          id="about"
          className="h-screen flex justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center py-16 gap-3 text-wrap text-center relative">
            <p className="text-2xl font-medium text-white">
              Jurusan Rekayasa Perangkat Lunak adalah jurusan yang bergerak di
              bidang teknologi software.
            </p>
            <Chip
              size="sm"
              className="bg-white -rotate-12 absolute top-0 left-5"
            >
              <i className="bi bi-code text-base mr-1"></i>
              HTML
            </Chip>
            <Chip
              size="sm"
              className="bg-white rotate-12 absolute top-0 right-5"
            >
              <i className="bi bi-code text-base mr-1"></i>
              CSS
            </Chip>
            <Chip size="sm" className="bg-white absolute top-0">
              <i className="bi bi-code text-base mr-1"></i>
              JS
            </Chip>
            <Chip
              size="sm"
              className="bg-white rotate-12 absolute bottom-0 left-5"
            >
              <i className="bi bi-code text-base mr-1"></i>
              JAVA
            </Chip>
            <Chip size="sm" className="bg-white absolute bottom-0">
              <i className="bi bi-code text-base mr-1"></i>
              PHP
            </Chip>
            <Chip
              size="sm"
              className="bg-white -rotate-12 absolute bottom-0 right-0"
            >
              <i className="bi bi-code text-base mr-1"></i>
              LARAVEL
            </Chip>
          </div>
        </section>
        <section
          id="structure"
          className="h-screen flex justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center gap-3 text-wrap text-center">
            <h1 className="text-2xl font-semibold text-white">
              Class Structure
            </h1>
            <div className="mt-5">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-white">WALI KELAS</p>
                  <Chip className="bg-white min-w-52">
                    Nining Julyanasari M.PD
                  </Chip>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-white">KETUA KELAS</p>
                  <Chip className="bg-white min-w-52">Muhammad Dail</Chip>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-white">
                    WAKIL KETUA KELAS
                  </p>
                  <Chip className="bg-white min-w-52">AURA SALSABILA</Chip>
                </div>
              </div>
              <div className="flex gap-10 mt-6">
                <div className="flex flex-col justify-start gap-4">
                  <div className="flex flex-col juatify-center items-center gap-2">
                    <p className="text-sm font-medium text-white">SEKERTARIS</p>
                    <Chip className="bg-white min-w-32">An'nur & Rivaldi</Chip>
                  </div>
                  <div className="flex flex-col juatify-center items-center gap-2">
                    <p className="text-sm font-medium text-white">ABSENSI</p>
                    <Chip className="bg-white min-w-32">Tantri & Siti R</Chip>
                  </div>
                  <div className="flex flex-col juatify-center items-center gap-2">
                    <p className="text-sm font-medium text-white">
                      SEKSI UPACARA
                    </p>
                    <Chip className="bg-white min-w-32">Aura & Devan</Chip>
                  </div>
                  <div className="flex flex-col juatify-center items-center gap-2">
                    <p className="text-sm font-medium text-white">
                      SEKSI HUMAS
                    </p>
                    <Chip className="bg-white min-w-32">Rijal & Topik</Chip>
                  </div>
                </div>
                <div className="flex flex-col justify-end gap-4">
                  <div className="flex flex-col juatify-center items-center gap-2">
                    <p className="text-sm font-medium text-white">BENDAHARA</p>
                    <Chip className="bg-white min-w-32">Keylla & Amel</Chip>
                  </div>
                  <div className="flex flex-col juatify-center items-center gap-2">
                    <p className="text-sm font-medium text-white">
                      SEKSI PERALATAN
                    </p>
                    <Chip className="bg-white min-w-32">Rian H & Fajri</Chip>
                  </div>
                  <div className="flex flex-col juatify-center items-center gap-2">
                    <p className="text-sm font-medium text-white">
                      SEKSI OLAHRAGA
                    </p>
                    <Chip className="bg-white min-w-32">Pajar & Rahmat</Chip>
                  </div>
                  <div className="flex flex-col juatify-center items-center gap-2">
                    <p className="text-sm font-medium text-white">
                      SEKSI KEBERSIHAN
                    </p>
                    <Chip className="bg-white min-w-32">Melani & Nursiva</Chip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="galleries"
          className="h-screen flex justify-center items-center"
        >
          <div>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-semibold text-white">Galleries</h1>
            </div>
            <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 mt-5">
              <Card className="col-span-12 h-72">
                <CardHeader className="bg-black bg-opacity-50 absolute z-10 flex-col justify-start items-start">
                  <p className="text-tiny font-medium text-white opacity-60">
                    GALLERIES
                  </p>
                  <h1 className="text-md font-bold text-white">HARI GURU</h1>
                  <h1></h1>
                </CardHeader>
                <Image
                  removeWrapper
                  src="/image/tribun.jpg"
                  className="z-0 h-full w-full object-cover object-center"
                />
              </Card>
              <Card className="col-span-6 sm:col-span-4 h-72">
                <CardHeader className="bg-black bg-opacity-50 absolute z-10 flex-col justify-start items-start">
                  <p className="text-tiny font-medium text-white opacity-60">
                    GALLERIES
                  </p>
                  <h1 className="text-md font-bold text-white">KEGIATAN P5</h1>
                  <h1></h1>
                </CardHeader>
                <Image
                  removeWrapper
                  src="/image/P5.jpg"
                  className="z-0 h-full w-full object-cover"
                />
              </Card>
              <Card className="col-span-6 h-72">
                <CardHeader className="bg-black bg-opacity-50 absolute z-10 flex-col justify-start items-start">
                  <p className="text-tiny font-medium text-white opacity-60">
                    GALLERIES
                  </p>
                  <h1 className="text-md font-bold text-white">LAB RPL</h1>
                  <h1></h1>
                </CardHeader>
                <Image
                  removeWrapper
                  src="/image/muslim.jpg"
                  className="z-0 h-full w-full object-cover"
                />
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer" className="bg-[#18181b] p-5">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-2xl font-semibold text-white">RPL 2026</h1>
            <p className="text-sm font-normal text-white opacity-80">
              RPL Angkatan 2026
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <h1 className="text-md font-medium text-white">Socials</h1>
              <Link
                href="https://instagram.com/elevenrpl__"
                className="text-xs font-normal text-white opcity-80 mt-3"
              >
                Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@xirplnecy"
                className="text-xs font-normal text-white opcity-80 mt-2"
              >
                TikTok
              </Link>
              <Link
                href="https://ngl.link/rpl18388"
                className="text-xs font-normal text-white opcity-80 mt-2"
              >
                NGL
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-md font-medium text-white">Links</h1>
              <Link
                href="#"
                className="text-xs font-normal text-white opcity-80 mt-3"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-xs font-normal text-white opcity-80 mt-2"
              >
                About Us
              </Link>
              <Link
                href="#structure"
                className="text-xs font-normal text-white opcity-80 mt-2"
              >
                Structure
              </Link>
              <Link
                href="#galleries"
                className="text-xs font-normal text-white opcity-80 mt-2"
              >
                Galleries
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-xs font-normal text-white opacity-80">
              &copy; 2024 RPL 2026 NECHY
            </p>
          </div>
        </div>
      </footer>
      {/* <GradientElement /> */}
    </>
  );
}

export default App;
