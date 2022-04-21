import UpbButton from "../../components/UpButton";
import "./products.css";

const Products = () => {
  const handleSubmitLeafRelief = () => {
    window.location.href = "http://www.leaf-relief.com";
  };

  const handleSubmitGutterTopper = () => {
    window.location.href = "http://www.guttertopper.com";
  };

  return (
    <div className="gutter-container">
      <UpbButton />
      <div className="header-text-container">
        <p className="header-text">Gutters</p>
      </div>
      <p className="text-header">Seamless 6" K-style</p>
      <p className="text-gutter">
        Description: 6" seamless ogee or k-style aluminum gutter has been the
        industry standard for over 40 years. This is the product preferred by
        architects, builders and homeowners across the country and it is the
        recommended size gutter for the occasional torrential rain in Florida.
        We manufacture all 6" seamless gutter on site, custom made for your home
        or building, eliminating any joints or seams. We use .027 or .032
        aluminum with baked on enamel finish that comes with a twenty year
        warranty. We use a .060 hidden hangers at every 36 inches. We use the
        very best sealant available to ensure leak free endcaps and miters. Most
        6" installation utilizes our 3" x "4" downspout. Our standard downspout
        and elbow is manufactured from prepainted .019 aluminum. We install the
        downspouts with two wrap around straps on one story and another strap at
        the joints on 2 and 3 story installations. Our installations carry a 15
        year labor and 20 year material manufacturer warranty.
      </p>
      <p className="text-header">Seamless 7" Box-style</p>
      <p>
        Description: This is used on large commercial shopping centers,
        churches, warehouses and residential homes with tile- or metal roofs if
        necessary. It comes in .040 and .050 prepainted aluminum and 24 gauge
        prepainted steel. We use the .060 aluminum or 16 gauge steel hidden
        hangers at every 24 inches when installing 7" gutter, and 4X5 downspouts
        and elbows
      </p>
      <p className="text-header">Copper Gutter and Downspouts</p>
      <p>
        Description: We still solder our ends and mitres just like our
        grandfathers used to make, but today's copper gutters are seamless. We
        can use brass or stainless steel hidden hangers when installing 16 ounce
        copper gutter. We can install 6" seamless copper gutter with 3x4
        downspouts or 3", 4" round downspouts and scupper heads or commonly
        known as collector boxes.
      </p>
      <p className="text-header">1/2 Round Gutter</p>
      <p>
        Description: We install aluminum and copper 6" 1/2 round gutter.
        Aluminum is available in all standard colors. We have all the aluminum
        and brass hidden hangers and various design underneath circle combos,
        and 3" or 4" round downpouts needed to keep that old, traditional look
        or meet the code requirements.
      </p>

      <div className="header-text-container">
        <p className="header-text">Gutters Protection</p>
      </div>
      <p className="text-header">Gutter Topper - Tested To The Best</p>
      <p>
        You can trust Gutter Topper to perform as promised for your home - even
        under the harshest weather conditions. Independent testing proves it.
        PRI Construction Material Technologies, an independent testing firm for
        the roofing and construction industries, tested Gutter Topper against
        the worst that Mother Nature could dish out. Passing in every tested
        category, Gutter Topper is certified to: * Stops leaves, twigs and
        debris. * Resist winds of up to 110 mph - (Miami-Dade County standards,
        the strictest in the United States) * Handle downpours of up to 22" per
        hour / 528" per day * Withstand up to 1,200 lbs. of weight per sq. ft.
        So, when the weather gets rough, don't worry. You can count on Gutter
        Topper gutter guards to be stronger than the forces of nature. Eliminate
        gutter cleaning forever... Guaranteed! Transferable Lifetime Warranty!.
      </p>
      <div className="color-container">
        <div className="white" id="color-card">
          White
        </div>
        <div className="royalbrown" id="color-card">
          Royal Brown
        </div>
        <div className="green" id="color-card">
          Green
        </div>
        <div className="clay" id="color-card">
          Clay
        </div>
        <div className="black" id="color-card">
          Black
        </div>
        <div className="musketbrown" id="color-card">
          Musket Brown
        </div>
        <div className="pearlgray" id="color-card">
          Pearl Gray
        </div>
        <div className="charcoal" id="color-card">
          Charcoal
        </div>
        <div className="red" id="color-card">
          Red
        </div>
        <div className="lightbronze" id="color-card">
          Light Bronze
        </div>
        <div className="tan" id="color-card">
          Tan
        </div>
        <div className="copperClone" id="color-card">
          Copper Clone
        </div>
        <div className="slateblue" id="color-card">
          Slate Blue
        </div>
      </div>
      <p>
        These colors are for reference only! At the time of the estimate our
        sales representative will show you the actual color sample, from which
        you can make your selection! We also offer genuine copper Guttertopper!
      </p>
      <div className="products-link-container">
        <p className="products-link">
          You can visit GutterTopper site for more information!
        </p>
        <button
          type="submit"
          onClick={handleSubmitGutterTopper}
          className="products-link-button"
        >
          Click to Gutter Topper
        </button>
      </div>
      <p className="text-header" id="leafRelief">
        Leaf Relief
      </p>
      <p>
        Leaf Relief brings real relief to homeowners who need a gutter
        protection solution that works, first time, every time. Leaf Reliefs
        patented Aluma-Perf Technology keeps debris out of gutters, allowing
        water to flow freely. Debris is then lifted off of gutters by a gentle
        breeze. Gutter Protection for the fraction of the price of other
        systems! 10 years Manufacturers Warranty!
      </p>
      <div className="products-link-container">
        <p className="products-link">
          You can visit Leaf-Relief site for more information!
        </p>
        <button
          type="submit"
          onClick={handleSubmitLeafRelief}
          className="products-link-button"
        >
          Click to Leaf-Relief site
        </button>
      </div>
    </div>
  );
};

export default Products;
