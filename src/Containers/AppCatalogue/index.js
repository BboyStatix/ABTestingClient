import React from 'react';
import loadVariantComponent from "../../HOCs/loadVariantComponent";
import A from "./A";
import B from "./B";

export default loadVariantComponent({A: <A />, B: <B />});
