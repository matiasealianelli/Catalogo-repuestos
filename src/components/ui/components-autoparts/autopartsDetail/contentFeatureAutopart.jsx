import "./contentFeatureAutopart.css";

export default function ContentFeatureAutopart({ property, value }) {
  return (
    <>
      <div className="contentFeatureAutopart">
        <h6 className="featureAutopart">{property}:</h6>
        <p className="featureAutopart">{value}</p>
      </div>
    </>
  );
}
