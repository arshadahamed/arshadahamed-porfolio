'use client';
import Link from 'next/link';
import { RiDownloadLine } from '@remixicon/react';
import SlideUp from '@/utlits/animations/slideUp';

export default function NotFound() {
  return (
    <section className="call-to-action-area min-h-screen flex items-center ">
      <div className="container">
        <div className="row">
          {/* START 404 TEXT AREA */}
          <div className="col-lg-12">
            <SlideUp>
              <div className="about-content-part call-to-action-part text-center" style={{ marginTop: '120px' }}>
                <h1 className="text-6xl font-bold text-red-600 mb-4">404 - Not Found</h1>
                <h2 className="mb-3">Are you lost in the pixels?</h2>
                <p className="mb-4">
                  Sorry, the page you’re looking for doesn’t exist. But don’t worry —
                  we can still make magic together. ✨
                </p>
                <div className="hero-btns flex justify-center gap-4">
                  <Link href="/" className="theme-btn">
                    Go Home <i><RiDownloadLine size={16} /></i>
                  </Link>
                </div>
                {/* <div class="container404">
                <div class="error404page">
                    <div class="newcharacter404">
                        <div class="chair404"></div>
                        <div class="leftshoe404"></div>
                        <div class="rightshoe404"></div>
                        <div class="legs404"></div>
                        <div class="torso404">
                            <div class="body404"></div>
                            <div class="leftarm404"></div>
                            <div class="rightarm404"></div>
                            <div class="head404">
                                <div class="eyes404"></div>
                            </div>
                        </div>
                        <div class="laptop404"></div>
                    </div>
                </div>
                </div> */}
              </div>
            </SlideUp>
          </div>
          {/* END 404 TEXT AREA */}
        </div>
      </div>
    </section>
    
  );
}
