import React from "react";
import { house } from "../../components/Home/images";
import Star from "../../components/Rating/Rating";
import "./shopCart.css";
import del from "../img/delete.png";
import update from "../img/update.png";
import signOut from "../img/sign-out.png";
import tag from "../img/tag.png";
import left from "../img/left.png";

const Cart = () => {
  return (
    <>
      <header>
        <nav className="route-header">
          <a href="/">
            <img src={house} alt="home" />
            <p>Home</p>
          </a>
          <span></span>
          <a href="/">Shop</a>
          <span>Cart</span>
        </nav>
      </header>
      <main>
        <div className="headings">
          <h1>Your Cart</h1>
          <div className="heading-body">
            <h6 className="text-body">
              There are <span className="text-brand">3</span> products in your
              cart
            </h6>
            <h6 className="text-body">
              <a href="/">
                <img src={del} alt="icon" height={"16px"} /> Clear Cart
              </a>
            </h6>
          </div>
        </div>
        <div className="content-body">
          <div className="left-content">
            <div className="table-body">
              <table className="table-wishlist">
                <thead>
                  <tr className="main-heading">
                    <th className="custom-checkbox start">
                      <input
                        className=""
                        type="checkbox"
                        name="checkbox"
                        id=""
                        value=""
                      />
                    </th>
                    <th scope="col" colSpan={2}>
                      Product
                    </th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col" className="end">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="custom-checkbox">
                      <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="product-img">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                        alt="/"
                      />
                    </td>
                    <td className="product-des product-name">
                      <h6>
                        <a
                          className="product-name-heading"
                          href="shop-product-right.html"
                        >
                          Field Roast Chao Cheese Creamy Original
                        </a>
                        <Star />
                      </h6>
                    </td>
                    <td className="price" data-title="Unit Price">
                      <h4 className="text-body">$2.51 </h4>
                    </td>
                    <td className="detail-info" data-title="Stock">
                      <input type="number" defaultValue={1} min={1} />
                    </td>
                    <td className="price" data-title="Price">
                      <h4 className="text-brand">$2.51 </h4>
                    </td>
                    <td className="action" data-title="Remove">
                      <a href="/" className="text-body">
                        <img src={del} alt="icon" height={"24px"} />
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="custom-checkbox">
                      <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="product-img">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                        alt="/"
                      />
                    </td>
                    <td className="product-des product-name">
                      <h6>
                        <a
                          className="product-name-heading"
                          href="shop-product-right.html"
                        >
                          Blue Diamond Almonds Lightly Salted
                        </a>
                        <Star />
                      </h6>
                    </td>
                    <td className="price" data-title="Unit Price">
                      <h4 className="text-body">$3.2 </h4>
                    </td>
                    <td className="detail-info" data-title="Stock">
                      <input type="number" defaultValue={1} min={1} />
                    </td>
                    <td className="price" data-title="Price">
                      <h4 className="text-brand">$3.2 </h4>
                    </td>
                    <td className="action" data-title="Remove">
                      <a href="/" className="text-body">
                        <img src={del} alt="icon" height={"24px"} />
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="custom-checkbox">
                      <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="product-img">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
                        alt="/"
                      />
                    </td>
                    <td className="product-des product-name">
                      <h6>
                        <a
                          className="product-name-heading"
                          href="shop-product-right.html"
                        >
                          Fresh Organic Mustard Leaves Bell Pepper
                        </a>
                        <Star />
                      </h6>
                    </td>
                    <td className="price" data-title="Unit Price">
                      <h4 className="text-body">$2.43 </h4>
                    </td>
                    <td className="detail-info" data-title="Stock">
                      <input type="number" defaultValue={1} min={1} />
                    </td>
                    <td className="price" data-title="Price">
                      <h4 className="text-brand">$2.43 </h4>
                    </td>
                    <td className="action" data-title="Remove">
                      <a href="/" className="text-body">
                        <img src={del} alt="icon" height={"24px"} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="nav-buttons">
              <a className="back btn" href="/">
                <img src={left} alt="back" />
                Continue Shopping
              </a>
              <a className="update btn" href="/">
                <img src={update} alt="icon" />
                Update Cart
              </a>
            </div>
            <div className="shipping-coupen">
              <div className="shipping">
                <h4>Calculate Shipping</h4>
                <p>
                  Flat rate:<span>5%</span>
                </p>
                <select
                  className="custom-select"
                  data-select2-id="7"
                  aria-hidden="true"
                >
                  <option value="UK" data-select2-id="9">
                    United Kingdom
                  </option>
                  <option value="AX" data-select2-id="23">
                    Aland Islands
                  </option>
                  <option value="AF" data-select2-id="24">
                    Afghanistan
                  </option>
                  <option value="AL" data-select2-id="25">
                    Albania
                  </option>
                  <option value="DZ" data-select2-id="26">
                    Algeria
                  </option>
                  <option value="AD" data-select2-id="27">
                    Andorra
                  </option>
                  <option value="AO" data-select2-id="28">
                    Angola
                  </option>
                  <option value="AI" data-select2-id="29">
                    Anguilla
                  </option>
                  <option value="AQ" data-select2-id="30">
                    Antarctica
                  </option>
                  <option value="AG" data-select2-id="31">
                    Antigua and Barbuda
                  </option>
                  <option value="AR" data-select2-id="32">
                    Argentina
                  </option>
                  <option value="AM" data-select2-id="33">
                    Armenia
                  </option>
                  <option value="AW" data-select2-id="34">
                    Aruba
                  </option>
                  <option value="AU" data-select2-id="35">
                    Australia
                  </option>
                  <option value="AT" data-select2-id="36">
                    Austria
                  </option>
                  <option value="AZ" data-select2-id="37">
                    Azerbaijan
                  </option>
                  <option value="BS" data-select2-id="38">
                    Bahamas
                  </option>
                  <option value="BH" data-select2-id="39">
                    Bahrain
                  </option>
                  <option value="BD" data-select2-id="40">
                    Bangladesh
                  </option>
                  <option value="BB" data-select2-id="41">
                    Barbados
                  </option>
                  <option value="BY" data-select2-id="42">
                    Belarus
                  </option>
                  <option value="PW" data-select2-id="43">
                    Belau
                  </option>
                  <option value="BE" data-select2-id="44">
                    Belgium
                  </option>
                  <option value="BZ" data-select2-id="45">
                    Belize
                  </option>
                  <option value="BJ" data-select2-id="46">
                    Benin
                  </option>
                  <option value="BM" data-select2-id="47">
                    Bermuda
                  </option>
                  <option value="BT" data-select2-id="48">
                    Bhutan
                  </option>
                  <option value="BO" data-select2-id="49">
                    Bolivia
                  </option>
                  <option value="BQ" data-select2-id="50">
                    Bonaire, Saint Eustatius and Saba
                  </option>
                  <option value="BA" data-select2-id="51">
                    Bosnia and Herzegovina
                  </option>
                  <option value="BW" data-select2-id="52">
                    Botswana
                  </option>
                  <option value="BV" data-select2-id="53">
                    Bouvet Island
                  </option>
                  <option value="BR" data-select2-id="54">
                    Brazil
                  </option>
                  <option value="IO" data-select2-id="55">
                    British Indian Ocean Territory
                  </option>
                  <option value="VG" data-select2-id="56">
                    British Virgin Islands
                  </option>
                  <option value="BN" data-select2-id="57">
                    Brunei
                  </option>
                  <option value="BG" data-select2-id="58">
                    Bulgaria
                  </option>
                  <option value="BF" data-select2-id="59">
                    Burkina Faso
                  </option>
                  <option value="BI" data-select2-id="60">
                    Burundi
                  </option>
                  <option value="KH" data-select2-id="61">
                    Cambodia
                  </option>
                  <option value="CM" data-select2-id="62">
                    Cameroon
                  </option>
                  <option value="CA" data-select2-id="63">
                    Canada
                  </option>
                  <option value="CV" data-select2-id="64">
                    Cape Verde
                  </option>
                  <option value="KY" data-select2-id="65">
                    Cayman Islands
                  </option>
                  <option value="CF" data-select2-id="66">
                    Central African Republic
                  </option>
                  <option value="TD" data-select2-id="67">
                    Chad
                  </option>
                  <option value="CL" data-select2-id="68">
                    Chile
                  </option>
                  <option value="CN" data-select2-id="69">
                    China
                  </option>
                  <option value="CX" data-select2-id="70">
                    Christmas Island
                  </option>
                  <option value="CC" data-select2-id="71">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="CO" data-select2-id="72">
                    Colombia
                  </option>
                  <option value="KM" data-select2-id="73">
                    Comoros
                  </option>
                  <option value="CG" data-select2-id="74">
                    Congo (Brazzaville)
                  </option>
                  <option value="CD" data-select2-id="75">
                    Congo (Kinshasa)
                  </option>
                  <option value="CK" data-select2-id="76">
                    Cook Islands
                  </option>
                  <option value="CR" data-select2-id="77">
                    Costa Rica
                  </option>
                  <option value="HR" data-select2-id="78">
                    Croatia
                  </option>
                  <option value="CU" data-select2-id="79">
                    Cuba
                  </option>
                  <option value="CW" data-select2-id="80">
                    CuraÇao
                  </option>
                  <option value="CY" data-select2-id="81">
                    Cyprus
                  </option>
                  <option value="CZ" data-select2-id="82">
                    Czech Republic
                  </option>
                  <option value="DK" data-select2-id="83">
                    Denmark
                  </option>
                  <option value="DJ" data-select2-id="84">
                    Djibouti
                  </option>
                  <option value="DM" data-select2-id="85">
                    Dominica
                  </option>
                  <option value="DO" data-select2-id="86">
                    Dominican Republic
                  </option>
                  <option value="EC" data-select2-id="87">
                    Ecuador
                  </option>
                  <option value="EG" data-select2-id="88">
                    Egypt
                  </option>
                  <option value="SV" data-select2-id="89">
                    El Salvador
                  </option>
                  <option value="GQ" data-select2-id="90">
                    Equatorial Guinea
                  </option>
                  <option value="ER" data-select2-id="91">
                    Eritrea
                  </option>
                  <option value="EE" data-select2-id="92">
                    Estonia
                  </option>
                  <option value="ET" data-select2-id="93">
                    Ethiopia
                  </option>
                  <option value="FK" data-select2-id="94">
                    Falkland Islands
                  </option>
                  <option value="FO" data-select2-id="95">
                    Faroe Islands
                  </option>
                  <option value="FJ" data-select2-id="96">
                    Fiji
                  </option>
                  <option value="FI" data-select2-id="97">
                    Finland
                  </option>
                  <option value="FR" data-select2-id="98">
                    France
                  </option>
                  <option value="GF" data-select2-id="99">
                    French Guiana
                  </option>
                  <option value="PF" data-select2-id="100">
                    French Polynesia
                  </option>
                  <option value="TF" data-select2-id="101">
                    French Southern Territories
                  </option>
                  <option value="GA" data-select2-id="102">
                    Gabon
                  </option>
                  <option value="GM" data-select2-id="103">
                    Gambia
                  </option>
                  <option value="GE" data-select2-id="104">
                    Georgia
                  </option>
                  <option value="DE" data-select2-id="105">
                    Germany
                  </option>
                  <option value="GH" data-select2-id="106">
                    Ghana
                  </option>
                  <option value="GI" data-select2-id="107">
                    Gibraltar
                  </option>
                  <option value="GR" data-select2-id="108">
                    Greece
                  </option>
                  <option value="GL" data-select2-id="109">
                    Greenland
                  </option>
                  <option value="GD" data-select2-id="110">
                    Grenada
                  </option>
                  <option value="GP" data-select2-id="111">
                    Guadeloupe
                  </option>
                  <option value="GT" data-select2-id="112">
                    Guatemala
                  </option>
                  <option value="GG" data-select2-id="113">
                    Guernsey
                  </option>
                  <option value="GN" data-select2-id="114">
                    Guinea
                  </option>
                  <option value="GW" data-select2-id="115">
                    Guinea-Bissau
                  </option>
                  <option value="GY" data-select2-id="116">
                    Guyana
                  </option>
                  <option value="HT" data-select2-id="117">
                    Haiti
                  </option>
                  <option value="HM" data-select2-id="118">
                    Heard Island and McDonald Islands
                  </option>
                  <option value="HN" data-select2-id="119">
                    Honduras
                  </option>
                  <option value="HK" data-select2-id="120">
                    Hong Kong
                  </option>
                  <option value="HU" data-select2-id="121">
                    Hungary
                  </option>
                  <option value="IS" data-select2-id="122">
                    Iceland
                  </option>
                  <option value="IN" data-select2-id="123">
                    India
                  </option>
                  <option value="ID" data-select2-id="124">
                    Indonesia
                  </option>
                  <option value="IR" data-select2-id="125">
                    Iran
                  </option>
                  <option value="IQ" data-select2-id="126">
                    Iraq
                  </option>
                  <option value="IM" data-select2-id="127">
                    Isle of Man
                  </option>
                  <option value="IL" data-select2-id="128">
                    Israel
                  </option>
                  <option value="IT" data-select2-id="129">
                    Italy
                  </option>
                  <option value="CI" data-select2-id="130">
                    Ivory Coast
                  </option>
                  <option value="JM" data-select2-id="131">
                    Jamaica
                  </option>
                  <option value="JP" data-select2-id="132">
                    Japan
                  </option>
                  <option value="JE" data-select2-id="133">
                    Jersey
                  </option>
                  <option value="JO" data-select2-id="134">
                    Jordan
                  </option>
                  <option value="KZ" data-select2-id="135">
                    Kazakhstan
                  </option>
                  <option value="KE" data-select2-id="136">
                    Kenya
                  </option>
                  <option value="KI" data-select2-id="137">
                    Kiribati
                  </option>
                  <option value="KW" data-select2-id="138">
                    Kuwait
                  </option>
                  <option value="KG" data-select2-id="139">
                    Kyrgyzstan
                  </option>
                  <option value="LA" data-select2-id="140">
                    Laos
                  </option>
                  <option value="LV" data-select2-id="141">
                    Latvia
                  </option>
                  <option value="LB" data-select2-id="142">
                    Lebanon
                  </option>
                  <option value="LS" data-select2-id="143">
                    Lesotho
                  </option>
                  <option value="LR" data-select2-id="144">
                    Liberia
                  </option>
                  <option value="LY" data-select2-id="145">
                    Libya
                  </option>
                  <option value="LI" data-select2-id="146">
                    Liechtenstein
                  </option>
                  <option value="LT" data-select2-id="147">
                    Lithuania
                  </option>
                  <option value="LU" data-select2-id="148">
                    Luxembourg
                  </option>
                  <option value="MO" data-select2-id="149">
                    Macao S.A.R., China
                  </option>
                  <option value="MK" data-select2-id="150">
                    Macedonia
                  </option>
                  <option value="MG" data-select2-id="151">
                    Madagascar
                  </option>
                  <option value="MW" data-select2-id="152">
                    Malawi
                  </option>
                  <option value="MY" data-select2-id="153">
                    Malaysia
                  </option>
                  <option value="MV" data-select2-id="154">
                    Maldives
                  </option>
                  <option value="ML" data-select2-id="155">
                    Mali
                  </option>
                  <option value="MT" data-select2-id="156">
                    Malta
                  </option>
                  <option value="MH" data-select2-id="157">
                    Marshall Islands
                  </option>
                  <option value="MQ" data-select2-id="158">
                    Martinique
                  </option>
                  <option value="MR" data-select2-id="159">
                    Mauritania
                  </option>
                  <option value="MU" data-select2-id="160">
                    Mauritius
                  </option>
                  <option value="YT" data-select2-id="161">
                    Mayotte
                  </option>
                  <option value="MX" data-select2-id="162">
                    Mexico
                  </option>
                  <option value="FM" data-select2-id="163">
                    Micronesia
                  </option>
                  <option value="MD" data-select2-id="164">
                    Moldova
                  </option>
                  <option value="MC" data-select2-id="165">
                    Monaco
                  </option>
                  <option value="MN" data-select2-id="166">
                    Mongolia
                  </option>
                  <option value="ME" data-select2-id="167">
                    Montenegro
                  </option>
                  <option value="MS" data-select2-id="168">
                    Montserrat
                  </option>
                  <option value="MA" data-select2-id="169">
                    Morocco
                  </option>
                  <option value="MZ" data-select2-id="170">
                    Mozambique
                  </option>
                  <option value="MM" data-select2-id="171">
                    Myanmar
                  </option>
                  <option value="NA" data-select2-id="172">
                    Namibia
                  </option>
                  <option value="NR" data-select2-id="173">
                    Nauru
                  </option>
                  <option value="NP" data-select2-id="174">
                    Nepal
                  </option>
                  <option value="NL" data-select2-id="175">
                    Netherlands
                  </option>
                  <option value="AN" data-select2-id="176">
                    Netherlands Antilles
                  </option>
                  <option value="NC" data-select2-id="177">
                    New Caledonia
                  </option>
                  <option value="NZ" data-select2-id="178">
                    New Zealand
                  </option>
                  <option value="NI" data-select2-id="179">
                    Nicaragua
                  </option>
                  <option value="NE" data-select2-id="180">
                    Niger
                  </option>
                  <option value="NG" data-select2-id="181">
                    Nigeria
                  </option>
                  <option value="NU" data-select2-id="182">
                    Niue
                  </option>
                  <option value="NF" data-select2-id="183">
                    Norfolk Island
                  </option>
                  <option value="KP" data-select2-id="184">
                    North Korea
                  </option>
                  <option value="NO" data-select2-id="185">
                    Norway
                  </option>
                  <option value="OM" data-select2-id="186">
                    Oman
                  </option>
                  <option value="PK" data-select2-id="187">
                    Pakistan
                  </option>
                  <option value="PS" data-select2-id="188">
                    Palestinian Territory
                  </option>
                  <option value="PA" data-select2-id="189">
                    Panama
                  </option>
                  <option value="PG" data-select2-id="190">
                    Papua New Guinea
                  </option>
                  <option value="PY" data-select2-id="191">
                    Paraguay
                  </option>
                  <option value="PE" data-select2-id="192">
                    Peru
                  </option>
                  <option value="PH" data-select2-id="193">
                    Philippines
                  </option>
                  <option value="PN" data-select2-id="194">
                    Pitcairn
                  </option>
                  <option value="PL" data-select2-id="195">
                    Poland
                  </option>
                  <option value="PT" data-select2-id="196">
                    Portugal
                  </option>
                  <option value="QA" data-select2-id="197">
                    Qatar
                  </option>
                  <option value="IE" data-select2-id="198">
                    Republic of Ireland
                  </option>
                  <option value="RE" data-select2-id="199">
                    Reunion
                  </option>
                  <option value="RO" data-select2-id="200">
                    Romania
                  </option>
                  <option value="RU" data-select2-id="201">
                    Russia
                  </option>
                  <option value="RW" data-select2-id="202">
                    Rwanda
                  </option>
                  <option value="ST" data-select2-id="203">
                    São Tomé and Príncipe
                  </option>
                  <option value="BL" data-select2-id="204">
                    Saint Barthélemy
                  </option>
                  <option value="SH" data-select2-id="205">
                    Saint Helena
                  </option>
                  <option value="KN" data-select2-id="206">
                    Saint Kitts and Nevis
                  </option>
                  <option value="LC" data-select2-id="207">
                    Saint Lucia
                  </option>
                  <option value="SX" data-select2-id="208">
                    Saint Martin (Dutch part)
                  </option>
                  <option value="MF" data-select2-id="209">
                    Saint Martin (French part)
                  </option>
                  <option value="PM" data-select2-id="210">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="VC" data-select2-id="211">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="SM" data-select2-id="212">
                    San Marino
                  </option>
                  <option value="SA" data-select2-id="213">
                    Saudi Arabia
                  </option>
                  <option value="SN" data-select2-id="214">
                    Senegal
                  </option>
                  <option value="RS" data-select2-id="215">
                    Serbia
                  </option>
                  <option value="SC" data-select2-id="216">
                    Seychelles
                  </option>
                  <option value="SL" data-select2-id="217">
                    Sierra Leone
                  </option>
                  <option value="SG" data-select2-id="218">
                    Singapore
                  </option>
                  <option value="SK" data-select2-id="219">
                    Slovakia
                  </option>
                  <option value="SI" data-select2-id="220">
                    Slovenia
                  </option>
                  <option value="SB" data-select2-id="221">
                    Solomon Islands
                  </option>
                  <option value="SO" data-select2-id="222">
                    Somalia
                  </option>
                  <option value="ZA" data-select2-id="223">
                    South Africa
                  </option>
                  <option value="GS" data-select2-id="224">
                    South Georgia/Sandwich Islands
                  </option>
                  <option value="KR" data-select2-id="225">
                    South Korea
                  </option>
                  <option value="SS" data-select2-id="226">
                    South Sudan
                  </option>
                  <option value="ES" data-select2-id="227">
                    Spain
                  </option>
                  <option value="LK" data-select2-id="228">
                    Sri Lanka
                  </option>
                  <option value="SD" data-select2-id="229">
                    Sudan
                  </option>
                  <option value="SR" data-select2-id="230">
                    Suriname
                  </option>
                  <option value="SJ" data-select2-id="231">
                    Svalbard and Jan Mayen
                  </option>
                  <option value="SZ" data-select2-id="232">
                    Swaziland
                  </option>
                  <option value="SE" data-select2-id="233">
                    Sweden
                  </option>
                  <option value="CH" data-select2-id="234">
                    Switzerland
                  </option>
                  <option value="SY" data-select2-id="235">
                    Syria
                  </option>
                  <option value="TW" data-select2-id="236">
                    Taiwan
                  </option>
                  <option value="TJ" data-select2-id="237">
                    Tajikistan
                  </option>
                  <option value="TZ" data-select2-id="238">
                    Tanzania
                  </option>
                  <option value="TH" data-select2-id="239">
                    Thailand
                  </option>
                  <option value="TL" data-select2-id="240">
                    Timor-Leste
                  </option>
                  <option value="TG" data-select2-id="241">
                    Togo
                  </option>
                  <option value="TK" data-select2-id="242">
                    Tokelau
                  </option>
                  <option value="TO" data-select2-id="243">
                    Tonga
                  </option>
                  <option value="TT" data-select2-id="244">
                    Trinidad and Tobago
                  </option>
                  <option value="TN" data-select2-id="245">
                    Tunisia
                  </option>
                  <option value="TR" data-select2-id="246">
                    Turkey
                  </option>
                  <option value="TM" data-select2-id="247">
                    Turkmenistan
                  </option>
                  <option value="TC" data-select2-id="248">
                    Turks and Caicos Islands
                  </option>
                  <option value="TV" data-select2-id="249">
                    Tuvalu
                  </option>
                  <option value="UG" data-select2-id="250">
                    Uganda
                  </option>
                  <option value="UA" data-select2-id="251">
                    Ukraine
                  </option>
                  <option value="AE" data-select2-id="252">
                    United Arab Emirates
                  </option>
                  <option value="GB" data-select2-id="253">
                    United Kingdom (UK)
                  </option>
                  <option value="US" data-select2-id="254">
                    USA (US)
                  </option>
                  <option value="UY" data-select2-id="255">
                    Uruguay
                  </option>
                  <option value="UZ" data-select2-id="256">
                    Uzbekistan
                  </option>
                  <option value="VU" data-select2-id="257">
                    Vanuatu
                  </option>
                  <option value="VA" data-select2-id="258">
                    Vatican
                  </option>
                  <option value="VE" data-select2-id="259">
                    Venezuela
                  </option>
                  <option value="VN" data-select2-id="260">
                    Vietnam
                  </option>
                  <option value="WF" data-select2-id="261">
                    Wallis and Futuna
                  </option>
                  <option value="EH" data-select2-id="262">
                    Western Sahara
                  </option>
                  <option value="WS" data-select2-id="263">
                    Western Samoa
                  </option>
                  <option value="YE" data-select2-id="264">
                    Yemen
                  </option>
                  <option value="ZM" data-select2-id="265">
                    Zambia
                  </option>
                  <option value="ZW" data-select2-id="266">
                    Zimbabwe
                  </option>
                </select>
                <div className="state-zip">
                  <input
                    type="text"
                    required={true}
                    name="name"
                    placeholder="State / Country"
                  />
                  <input
                    type="text"
                    placeholder="PostCode / ZIP"
                    name="zip"
                    required={true}
                  />
                </div>
              </div>
              <div className="coupen">
                <h4>Apply Coupon</h4>
                <p>Using A Promo Code?</p>
                <div className="form">
                  <input
                    type="text"
                    required={true}
                    placeholder="Enter your coupon"
                    name="coupon"
                  />
                  <button type="submit">
                    <img src={tag} alt="tag" />
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="total-price">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>Subtotal</h6>
                    </td>
                    <td className="text-end">
                      <h4>$12.31</h4>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Shipping</h6>
                    </td>
                    <td>
                      <h5 className="text-end">Free</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Estimate for</h6>
                    </td>
                    <td>
                      <h5 className="text-end">United Kingdom</h5>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Total</h6>
                    </td>
                    <td>
                      <h4 className="text-end">$12.31</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a href="/" className="btn checkout">
                Proceed To CheckOut
                <img src={signOut} alt="signout" height={"16px"} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
