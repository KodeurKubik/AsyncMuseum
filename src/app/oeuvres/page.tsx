"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import allimages from "../images";
import Header from "../header";
import Footer from "../footer";

export default function Oeuvres() {
  const [searchQuery, setSearchQuery] = useState("");

  const [images] = useState(() =>
    [...allimages]
      .sort(() => 0.5 - Math.random())
      .slice(0, 25)
      .map((img, i) => ({
        ...img,
        index: i + 1,
      })),
  );

  const filteredArtworks = useMemo(() => {
    return images.filter((artwork) =>
      artwork.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, images]);

  const resetSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex min-h-screen flex-col mx-auto px-4 sm:px-6">
      <Header />
      <main className="flex-1 pt-16 sm:pt-24">
        <section className="w-full py-8 sm:py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Collection d&#39;Oeuvres
                </h1>
              </div>
            </div>

            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher une œuvre..."
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {filteredArtworks.map((artwork) => (
                <div key={artwork.index} className="group">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      unoptimized
                      src={artwork.url || "/placeholder.svg"}
                      alt={artwork.name}
                      width={1260}
                      height={750}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-center">
                    {artwork.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredArtworks.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Aucune œuvre trouvée pour cette recherche.
                </p>
                <button
                  onClick={resetSearch}
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
                >
                  Voir toutes les œuvres
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
