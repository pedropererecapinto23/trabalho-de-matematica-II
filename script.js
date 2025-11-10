function mostrarInfo(tipo) {
  const detalhes = document.getElementById('detalhes');

  const infos = {
    "Polícia Militar": "A Polícia Militar realiza patrulhamento preventivo e atua em emergências para garantir a segurança pública.",
    "Polícia Civil": "A Polícia Civil investiga crimes, coleta provas e conduz inquéritos para o Ministério Público e o Judiciário.",
    "Polícia Federal": "A Polícia Federal combate crimes de alcance nacional e internacional, como tráfico, contrabando e corrupção.",
    "Polícia Rodoviária Federal": "A PRF fiscaliza rodovias federais, combate o tráfico e promove campanhas de segurança no trânsito."
  };

  detalhes.textContent = infos[tipo] || "Informação não encontrada.";
}

