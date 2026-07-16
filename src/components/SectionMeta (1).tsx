type SectionMetaProps = {
  label: string
  center?: string
  right?: string
  className?: string
}

export function SectionMeta({ label, center, right, className = '' }: SectionMetaProps) {
  return (
    <div className={`section-meta ${className}`.trim()}>
      <p>{label}</p>
      {center ? <p>{center}</p> : <span aria-hidden="true" />}
      {right ? <p>{right}</p> : <span aria-hidden="true" />}
    </div>
  )
}
